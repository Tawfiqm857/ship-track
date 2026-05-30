import { useState } from 'react';
import { MessageCircle, X, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const SupportWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) {
      toast.error('Please enter your email and message');
      return;
    }
    toast.success('Message sent', {
      description: 'Our support team will reply within 24 hours.',
    });
    setMessage('');
    setEmail('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border bg-card shadow-2xl animate-fade-in overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-glow p-4 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">We're here to help</p>
                <p className="text-xs opacity-90">Typically replies within an hour</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 hover:bg-white/10 transition-colors"
                aria-label="Close support"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="mailto:support@maritimetracks.com" className="flex items-center gap-2 rounded-lg border p-2 hover:bg-muted transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" /> Email us
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 rounded-lg border p-2 hover:bg-muted transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" /> Call us
              </a>
            </div>

            <form onSubmit={handleSend} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
              />
              <Textarea
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="text-sm resize-none"
              />
              <Button type="submit" size="sm" className="w-full gap-2">
                <Send className="h-3.5 w-3.5" /> Send message
              </Button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label="Open support chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
          </span>
        )}
      </button>
    </div>
  );
};

export default SupportWidget;
