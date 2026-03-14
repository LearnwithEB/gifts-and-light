import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkItem {
    type: "email" | "url" | "address" | "phone";
    label: string;
    href?: string;
}

interface ContactCardProps {
    name: string;
    tags: string[];
    desc: string;
    links: LinkItem[];
    className?: string;
}

export function ContactCard({ name, tags, desc, links, className }: ContactCardProps) {
    return (
        <div className={cn("glass-card border-card-border/80 rounded-[20px] p-5 hover:border-gold/30 transition-all duration-300 group flex flex-col h-full", className)}>
            <div className="flex justify-between items-start gap-3 mb-3">
                <h4 className="font-serif text-lg text-warm [font-family:var(--font-playfair)] leading-tight group-hover:text-gold transition-colors">
                    {name}
                </h4>
                <div className="flex flex-wrap gap-1 justify-end shrink-0">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-gold/10 text-gold border border-gold/20 rounded-full px-2 py-0.5 whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <p className="text-[13px] text-light-text/90 leading-relaxed mb-5 flex-grow">
                {desc}
            </p>

            <div className="flex flex-col gap-2 mt-auto border-t border-white/5 pt-4">
                {links.map((link, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-faith/90">
                        {link.type === "email" && <Mail className="w-3.5 h-3.5 opacity-70" />}
                        {link.type === "url" && <ExternalLink className="w-3.5 h-3.5 opacity-70" />}
                        {link.type === "address" && <MapPin className="w-3.5 h-3.5 opacity-70" />}
                        {link.type === "phone" && <Phone className="w-3.5 h-3.5 opacity-70" />}

                        {link.href ? (
                            <a href={link.href} target={link.type === "url" ? "_blank" : undefined} rel={link.type === "url" ? "noopener noreferrer" : undefined} className="hover:text-faith hover:underline transition-all">
                                {link.label}
                            </a>
                        ) : (
                            <span>{link.label}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
