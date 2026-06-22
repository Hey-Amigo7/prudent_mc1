"use client";

import Image from "next/image";
import { Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { TEAM_MEMBERS } from "@/constants";

export function TeamGrid() {
  return (
    <section className="section-padding bg-[#0C0A08] relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl border border-[rgba(240,124,0,0.1)] bg-[#18140F] overflow-hidden transition-all duration-300 hover:border-[rgba(240,124,0,0.3)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18140F] via-[#18140F]/30 to-transparent" />

                {/* Social links overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#18140F]/80 border border-[rgba(240,124,0,0.2)] text-[#F07C00] backdrop-blur-sm hover:bg-[#F07C00]/10 transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      aria-label={`${member.name} on Twitter`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#18140F]/80 border border-[rgba(240,124,0,0.2)] text-[#F07C00] backdrop-blur-sm hover:bg-[#F07C00]/10 transition-colors"
                    >
                      <Twitter className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#18140F]/80 border border-[rgba(240,124,0,0.2)] text-[#F07C00] backdrop-blur-sm hover:bg-[#F07C00]/10 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 group-hover:text-[#F07C00] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#F07C00] mt-0.5">{member.role}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 flex-shrink-0" />
                </div>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Social icons row */}
                <div className="mt-5 pt-5 border-t border-[rgba(240,124,0,0.08)] flex items-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      aria-label="LinkedIn"
                      className="text-slate-600 hover:text-[#F07C00] transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      aria-label="Twitter"
                      className="text-slate-600 hover:text-[#F07C00] transition-colors duration-200"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label="Email"
                      className="text-slate-600 hover:text-[#F07C00] transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  <span className="ml-auto text-xs text-slate-600 font-mono">
                    {member.email?.split("@")[0]}
                  </span>
                </div>
              </div>

              {/* Bottom border glow */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/0 to-transparent group-hover:via-[#F07C00]/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="mt-16 rounded-2xl border border-[rgba(240,124,0,0.15)] bg-gradient-to-br from-[#18140F] to-[#221D17] p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-slate-100 mb-3">
            Join Our Team
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            We&apos;re always looking for exceptional talent who share our commitment to excellence and client-first advisory. View our current openings.
          </p>
          <a
            href="mailto:careers@prudentcapital.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F07C00] px-6 py-3 text-sm font-semibold text-[#0C0A08] hover:bg-[#FFD699] transition-all duration-200 hover:shadow-[0_0_25px_rgba(240,124,0,0.35)]"
          >
            View Open Positions
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
