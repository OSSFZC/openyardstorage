import InnerHero from "../../components/InnerHero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
 e.preventDefault();

 try {
  const res = await fetch("/api/send", {
   method: "POST",
   headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify({
    name,
    email,
    phone,
    message
   })
  });

  const data = await res.json();

  if (data.success) {
    navigate("/thank-you");
  } else {
    alert("Failed to send");
  }

 } catch (error) {
  console.log(error);
  alert("Error sending message");
 }
};
return (
<>
<InnerHero
subtitle=""
buttonText=""
buttonLink="#story"
backgroundImage="/images/contact/bg.png"
title="Contact Us"
/>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

{/* LEFT FORM */}
<div>
<h3 className="text-2xl font-semibold mb-2">
Send us your enquiry online
</h3>

<p className="text-gray-500 mb-8">
We’d love to hear from you. Please fill out this form.
</p>

<form onSubmit={handleSubmit} className="space-y-5">

<input
type="text"
placeholder="Enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
required/>

<input
type="email"
placeholder="you@company.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
required />

<input
type="text"
placeholder="+971 50 000 0000"
value={phone}
onChange={(e)=>setPhone(e.target.value)} 
className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none" required
/>

<textarea
rows="4"cd 
placeholder="Leave us a message..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
/>

<label className="flex items-center gap-2 text-sm text-gray-500">
<input type="checkbox" required />
You agree to our privacy policy.
</label>

<button
type="submit"
className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:to-red-700 text-white py-3 rounded-lg font-medium transition"
>
Send Message
</button>

</form>
</div>

{/* RIGHT SIDE */}
<div>
<h3 className="text-xl font-semibold text-red-600 mb-1">Location</h3>

<p className="text-gray-600 mb-4">
Hamriyah Free Zone, Sharjah <br />
P.O Box 42163
</p>

<div className="rounded-xl overflow-hidden shadow-lg mb-6">
<iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57644.219902197685!2d55.553548!3d25.446161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9dca6b63c8b%3A0x8c8e7c80f486f275!2sOSS%20FZC%20-%20Logistics!5e0!3m2!1sen!2sin!4v1770355968475!5m2!1sen!2sin"
className="w-full h-[320px] border-0"
loading="lazy"
/>
</div>

<div className="space-y-3 text-sm">
<p>
<span className="text-red-600 font-medium">Call us:</span><br />
<a
                href="tel:+971509322335"
                className="text-gray-500 hover:text-red-600"
              >+971 50 9322 335</a>
</p>

<p>
<span className="text-red-600 font-medium">Email us:</span><br />
<a
                href="mailto:sales@oss-me.com"
                className="text-gray-500 hover:text-red-600"
              >
                sales@oss-me.com
              </a>
</p>
</div>
</div>

</div>
</section>
</>
);
}