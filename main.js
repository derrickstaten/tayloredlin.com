// The booking form posts to Formspree. With JavaScript it stays on the page and shows a
// thank-you; without it, the browser does a normal POST and Formspree shows its own page.
(() => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("book-form");
  const status = form.querySelector(".form-status");
  const button = form.querySelector("button[type=submit]");
  const thanks = document.querySelector(".thanks");

  const check = () => {
    for (const input of form.querySelectorAll("[required]")) {
      const ok = input.checkValidity();
      input.setAttribute("aria-invalid", ok ? "false" : "true");
      if (!ok) {
        input.focus();
        return input.name === "email" && input.value ? "That email doesn't look quite right." : "Please add your name and email.";
      }
    }
    return "";
  };

  form.addEventListener("input", (e) => {
    e.target.removeAttribute("aria-invalid");
    status.textContent = "";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const problem = check();
    status.textContent = problem;
    if (problem) return;

    const data = new FormData(form);
    // Send the checked lessons as one readable line ("Voice, Piano") instead of repeated fields.
    const lessons = data.getAll("lessons");
    data.delete("lessons");
    data.set("lessons", lessons.length ? lessons.join(", ") : "Not sure yet");

    button.disabled = true;
    button.textContent = "Sending…";
    try {
      const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.errors?.map((x) => x.message).join(" ") || "");
      }
      const first = String(data.get("name") || "").trim().split(/\s+/)[0];
      thanks.querySelector(".thanks-name").textContent = first ? `, ${first}` : "";
      form.hidden = true;
      thanks.hidden = false;
      thanks.focus();
    } catch (err) {
      status.textContent = err.message || "Sorry, that didn't send. Please check your connection and try again.";
      button.disabled = false;
      button.textContent = "Send";
    }
  });
})();
