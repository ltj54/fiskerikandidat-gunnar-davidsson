"use client";

import { FormEvent, MouseEvent, useRef } from "react";

const recipient = "gunnar@davidsson.no";

export default function ContactDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = `Forespørsel fra ${name}`;
    const body = `Hei Gunnar,\n\n${message}\n\nVennlig hilsen\n${name}\n${email}`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeDialog();
  }

  return (
    <>
      <button
        className="button button-light contact-email-button"
        type="button"
        onClick={openDialog}
      >
        Send e-post <span aria-hidden="true">↗</span>
      </button>

      <dialog
        className="contact-dialog"
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClick={closeOnBackdrop}
      >
        <div className="dialog-panel">
          <button
            className="dialog-close"
            type="button"
            aria-label="Lukk e-postvinduet"
            onClick={closeDialog}
          >
            ×
          </button>
          <p className="section-kicker">E-post</p>
          <h2 id="contact-dialog-title">Skriv til Gunnar</h2>
          <p className="dialog-intro">
            Fyll ut feltene, så klargjøres meldingen i e-postprogrammet ditt.
            Opplysningene lagres ikke på nettsiden.
          </p>
          <form className="contact-form" onSubmit={submitForm}>
            <label htmlFor="contact-name">Navn</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />

            <label htmlFor="contact-email">E-post</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <label htmlFor="contact-message">Melding</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
            />

            <button className="button button-dark" type="submit">
              Opprett e-post <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
