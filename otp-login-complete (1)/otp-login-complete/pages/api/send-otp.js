import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { email } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000);

  const msg = {
    to: email,
    from: 'noreply@yourdomain.com',
    subject: 'رمز التحقق الخاص بك',
    text: `رمز التحقق هو: ${otp}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, otp }); // ✅ لأغراض الاختبار فقط
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}