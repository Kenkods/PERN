import { createTicket } from "../models/ticketmodel.js";

export async function handleTickets(req, res){
    try{

        const {description}=req.body;

        const userId=req.user.id;
        const title = generateTitle(description);
        const urgency = autoSetUrgency(description);

        const ticket= await createTicket({userId, title, description, urgency});
        res.status(201).json(ticket);
    }
    catch(error){
         console.error("Error creating ticket:", error);
         res.status(500).json({ error: "Internal Server Error" });
    }
}

function generateTitle(desc) {
  if (desc.toLowerCase().includes("loading") ||desc.toLowerCase().includes("slow")) return "speed Issue";
  if (desc.toLowerCase().includes("log in")|| desc.toLowerCase().includes("login")) return "Login Problem";
  return "Feature problems";
}

function autoSetUrgency(description) {
  const keywords = {
    high: ["can't log in", "not responding", "not working"],
    medium: ["slow", "delayed", "problem",],
    low: ["suggestion", "recommend", "just asking", "curious"]
  };

  const text = description.toLowerCase();

  for (const [level, terms] of Object.entries(keywords)) {
    if (terms.some(term => text.includes(term))) {
      return level;
    }
  }

  return 'medium';
}
