"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

const SUBJECTS = new Set([
  "genel",
  "uyelik",
  "bonus",
  "teknik",
  "diger",
]);

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (name.length < 2) {
    return { ok: false, message: "Lütfen adınızı girin (en az 2 karakter)." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Geçerli bir e-posta adresi girin." };
  }

  if (!SUBJECTS.has(subject)) {
    return { ok: false, message: "Lütfen bir konu seçin." };
  }

  if (message.length < 10) {
    return {
      ok: false,
      message: "Mesajınız en az 10 karakter olmalıdır.",
    };
  }

  if (message.length > 2000) {
    return { ok: false, message: "Mesaj en fazla 2000 karakter olabilir." };
  }

  // TODO: E-posta servisi (Resend, SMTP vb.) entegrasyonu buraya eklenebilir.
  console.info("[iletisim]", {
    name,
    email,
    subject,
    message: message.slice(0, 80) + (message.length > 80 ? "…" : ""),
    at: new Date().toISOString(),
  });

  return {
    ok: true,
    message:
      "Mesajınız başarıyla iletildi. Destek ekibimiz en kısa sürede size dönüş yapacaktır.",
  };
}
