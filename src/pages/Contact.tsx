import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const subjectOptions = ["Successful fill", "StartUp business", "Leadership work", "Business growth"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", subject: "" });
  };

  return (
    <div>
      <PageBanner title="Contact" />

      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <div className="w-16 h-1 bg-secondary mb-8 rounded" />
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Mail:</h4>
                  <p className="text-muted-foreground">info@cleanenergyfund.ng</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Head office address:</h4>
                  <p className="text-muted-foreground">6th Floor Landmark Towers,</p>
                  <p className="text-muted-foreground">5B Water Corporation Way Oniru,</p>
                  <p className="text-muted-foreground">Victoria Island, Lagos.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
                To get in touch with a member of our team, please fill the form below
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Name*" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input type="email" placeholder="Email*" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input placeholder="Phone Number*" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                >
                  <option value="" disabled>Subject</option>
                  {subjectOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90">
                  ✓ Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
