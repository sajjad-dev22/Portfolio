import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaArrowUp,
    FaFacebook,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-white py-10 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Top */}

                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                    {/* Logo */}

                    <div className="text-center lg:text-left">

                        <h2 className="text-3xl font-bold">
                            Sajjad
                        </h2>

                        <p className="text-gray-400 mt-2 max-w-sm">
                            MERN Stack Developer passionate about creating modern,
                            responsive and user-friendly web applications.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div className="flex flex-wrap justify-center gap-6 text-gray-300">

                        <a href="#home" className="hover:text-cyan-400 transition">
                            Home
                        </a>

                        <a href="#about" className="hover:text-cyan-400 transition">
                            About
                        </a>

                        <a href="#skills" className="hover:text-cyan-400 transition">
                            Skills
                        </a>

                        <a href="#projects" className="hover:text-cyan-400 transition">
                            Projects
                        </a>

                        <a href="#contact" className="hover:text-cyan-400 transition">
                            Contact
                        </a>

                    </div>

                    {/* Social */}

                    <div className="flex gap-4">

                        <a
                            href="https://github.com/sajjad-dev22?tab=overview&from=2026-07-01&to=2026-07-25"
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/md-sajjad-4b0472391/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://instagram.com/call.me.sajju"
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.facebook.com/md.sajjadraj.353"
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 transition"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} Md Sajjad. All Rights Reserved.
                    </p>

                    <a
                        href="/"
                        className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
                    >
                        <FaArrowUp />
                        Back to Top
                    </a>

                </div>

            </div>
        </footer>
    );
}