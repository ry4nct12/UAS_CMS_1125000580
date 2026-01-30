"use client";

import { useEffect, useRef, useState } from "react";
import Navabout from "@/app/components/nav-abt";
import "./about.css";

import {
    ButtonPrimary,
    ButtonSecondary,
    ButtonSuccess,
    ButtonDanger,
    ButtonInfo,
    CardBasic,
    CardImage,
    CardIcon,
    CardPrice,
    CardProfile,
    DropdownBasic,
    DropdownIcon,
    DropdownOutline,
    DropdownDark,
    DropdownSplit,
    ModalBasic,
    ModalConfirm,
    ModalImage,
    ModalForm,
    ModalFullscreen,
    PlaceholderText,
    PlaceholderCard,
    PlaceholderImage,
    PlaceholderAvatar,
    PlaceholderButton,
} from "@/lib/index";

export default function Page() {
    const [activeSection, setActiveSection] = useState("buttons");

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const sections = Array.from(
            container.querySelectorAll("section[id]")
        );

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const offset = 120;

            let current = sections[0]?.id;

            sections.forEach((section) => {
                if (scrollTop >= section.offsetTop - offset) {
                    current = section.id;
                }
            });

            if (current) setActiveSection(current);
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const container = containerRef.current;
        const target = document.getElementById(id);

        if (!container || !target) return;

        container.scrollTo({
            top: target.offsetTop - 120,
            behavior: "smooth",
        });
    };

    const [openBasic, setOpenBasic] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openImage, setOpenImage] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [openFull, setOpenFull] = useState(false);

    return (
        <>
            <Navabout />

            <div className="about-container">
                {/* SIDEBAR */}
                <aside className="about-sidebar">
                    <h3>Components</h3>
                    <ul>
                        {["buttons", "cards", "dropdowns", "modals", "placeholders"].map((id) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={activeSection === id ? "active" : ""}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(id);
                                    }}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* MAIN */}
                <main ref={containerRef} className="about-main">

                    <section id="buttons" className="doc-section">
                        <h1>Buttons</h1>
                        <div className="doc-card button-row">
                            <ButtonPrimary>Primary</ButtonPrimary>
                            <ButtonSecondary>Secondary</ButtonSecondary>
                            <ButtonSuccess>Success</ButtonSuccess>
                            <ButtonDanger>Danger</ButtonDanger>
                            <ButtonInfo>Info</ButtonInfo>
                        </div>
                    </section>

                    <section id="cards" className="doc-section">
                        <h1>Cards</h1>
                        <div className="doc-card button-row">
                            <CardBasic title="Basic Card" description="Card sederhana." />
                            <CardIcon icon="🚌" title="Transport" text="Nyaman & aman" />
                            <CardPrice title="Paket Wisata" price="500.000" features={["Guide", "Transport"]} />
                            <CardImage image="/images/homes1.jpg" title="Villa Ijen" location="Banyuwangi" />
                            <CardProfile avatar="/images/profile.jpg" name="Admin IJEN" role="Tour Guide" />
                        </div>
                    </section>

                    <section id="dropdowns" className="doc-section">
                        <h1>Dropdowns</h1>
                        <div className="doc-card button-row">
                            <DropdownBasic label="Basic" items={["Profile", "Logout"]} />
                            <DropdownIcon label="Setting" icon="⚙️" items={["Account", "Security"]} />
                            <DropdownOutline label="Outline" items={["A", "B"]} />
                            <DropdownDark label="Dark" items={["Dashboard"]} />
                            <DropdownSplit label="Action" items={["Edit", "Delete"]} />
                        </div>
                    </section>

                    <section id="modals" className="doc-section">
                        <h1>Modals</h1>
                        <div className="doc-card button-row">
                            <button onClick={() => setOpenBasic(true)}>Basic</button>
                            <button onClick={() => setOpenConfirm(true)}>Confirm</button>
                            <button onClick={() => setOpenImage(true)}>Image</button>
                            <button onClick={() => setOpenForm(true)}>Form</button>
                            <button onClick={() => setOpenFull(true)}>Fullscreen</button>
                        </div>

                        <ModalBasic open={openBasic} title="Hello" onClose={() => setOpenBasic(false)}>
                            Contoh modal
                        </ModalBasic>

                        <ModalConfirm
                            open={openConfirm}
                            message="Yakin?"
                            onClose={() => setOpenConfirm(false)}
                            onConfirm={() => setOpenConfirm(false)}
                        />

                        <ModalImage open={openImage} image="/images/homes1.jpg" onClose={() => setOpenImage(false)} />

                        <ModalForm open={openForm} onClose={() => setOpenForm(false)} onSubmit={() => setOpenForm(false)} />

                        <ModalFullscreen open={openFull} onClose={() => setOpenFull(false)}>
                            <h2>Fullscreen</h2>
                        </ModalFullscreen>
                    </section>

                    <section id="placeholders" className="doc-section">
                        <h1>Placeholders</h1>
                        <div className="doc-card button-row">
                            <PlaceholderText lines={4} />
                            <PlaceholderCard />
                            <PlaceholderImage />
                            <PlaceholderAvatar />
                            <PlaceholderButton width={120}/>
                        </div>
                    </section>

                </main>
            </div>
        </>
    );
}
