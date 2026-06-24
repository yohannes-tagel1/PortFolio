import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = 'yohannestagel21@gmail.com';
    const mailSubject = encodeURIComponent(subject || `Contact from ${name || 'Website Visitor'}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message
    ];
    const mailBody = encodeURIComponent(bodyLines.join('\n'));
    // Use mailto to open the user's email client populated with the message.
    const mailtoLink = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`;
    // Open the user's mail client
    window.location.href = mailtoLink;

    // Clear the form fields after a short delay so the mail client can open first
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-4 text-sm">Have a project in mind or want to talk? Feel free to send a message using the form below or email me directly.</p>

        <p className="text-center mb-6 text-sm">
          Direct email: <a className="text-indigo-400 hover:underline" href="mailto:yohannestagel21@gmail.com">yohannestagel21@gmail.com</a>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Subject</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="Let's work together" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="5" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="Type your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-300 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;