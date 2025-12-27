import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend("YOUR_RESEND_API_KEY");

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.json({success: false, error: "Missing fields" });
    }

    try {
        await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev",
            to: "your-email@example.com",
            subject: "New Contact Form Message",
            html:   `<p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>`
        });
        res.json({ success: true});
    } catch (error)  {
        res.json({ success: false, error });
    }
})

app.listen(3000, () => console.log("Server running on port 3000"));