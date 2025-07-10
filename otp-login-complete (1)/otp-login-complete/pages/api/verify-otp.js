export default function handler(req, res) {
  const { otp } = req.body;
  if (otp === '1234') {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}