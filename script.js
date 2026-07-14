// ---------- Data ----------
const services = [
  {
    i: "</>",
    t: "Website Development",
    d: "Custom, responsive, and high-performance websites built to grow your business."
  },
  {
    i: "📱",
    t: "Mobile App Development",
    d: "Native and cross-platform mobile applications designed for seamless user experiences."
  },
  {
    i: "🛒",
    t: "E-Commerce Development",
    d: "Scalable online stores with secure payments, intuitive shopping, and powerful management."
  },
  {
    i: "📣",
    t: "Social Media Marketing",
    d: "Build brand awareness and engage your audience across all major social platforms."
  },
  {
    i: "🔍",
    t: "SEO Optimization",
    d: "Improve search rankings, drive organic traffic, and increase online visibility."
  },
  {
    i: "🎨",
    t: "Branding",
    d: "Create a memorable brand identity with impactful visuals and strategic messaging."
  },
  {
    i: "📝",
    t: "Content Marketing",
    d: "Engaging content strategies that attract, educate, and convert your audience."
  },
  {
    i: "✉",
    t: "Email Marketing",
    d: "Automated email campaigns that nurture leads and strengthen customer relationships."
  }
];

const projects = [
  {
    n: "Manatee",
    ind: "Fashion E-Commerce",
    tech: ["Shopify", "Custom Theme", "E-Commerce"],
    d: "Designed and developed a modern Shopify store for a fashion brand with a seamless shopping experience, responsive design, secure checkout, and optimized product pages to enhance customer engagement and online sales.",
    r: "Shopify Store ",
    img: "https://manatee.in/cdn/shop/files/b.png?crop=center&height=640&v=1756651922&width=1920"
  },
  {
    n: "Cyltra Engineering",
    ind: "Industrial Manufacturing",
    tech: ["WordPress", "Elementor", "Product Catalog"],
    d: "Developed a professional WordPress website showcasing the company's engineering products, manufacturing capabilities, and industry expertise with an easy-to-manage product catalog and responsive design.",
    r: "Corporate Website",
    img: "https://cyltraengg.com/wp-content/uploads/2026/05/getus.jpeg"
  },
  {
    n: "Kvyan Electronic",
    ind: "Electronics & Automation",
    tech: ["WordPress", "Products", "Services"],
    d: "Built a product and services focused WordPress website featuring electronic solutions, detailed product information, service offerings, and a user-friendly interface designed to generate business inquiries.",
    r: "Business Website",
    img: "https://kavyanelectronics.com/wp-content/uploads/2026/07/tunnel-devices-banner-notext.png"
  },
  {
  n: "FlipArts",
  ind: "Custom Gifts & E-Commerce",
  tech: ["WordPress", "WooCommerce", "Custom UI"],
  d: "Developed a feature-rich WooCommerce store for a personalized gifts and artwork brand, offering a seamless shopping experience, secure checkout, custom product pages, and a responsive design optimized for customer engagement.",
  r: "E-Commerce Website",
  img: "https://fliparts.in/wp-content/uploads/2023/04/fliparts2.jpg"
},
{
  n: "MY LAIQA",
  ind: "Women's Wellness E-Commerce",
  tech: ["Shopify", "E-Commerce", "Custom Theme"],
  d: "Designed and developed a modern Shopify store for a women's wellness brand, showcasing premium products with an intuitive shopping experience, responsive layouts, and optimized product pages to enhance online sales and customer trust.",
  r: "Shopify Store",
  img: "https://shop.laiqa.ai/cdn/shop/files/Artboard_1_copy.png?v=1775036848&width=1920"
},
{
  n: "Digiheads",
  ind: "Digital Agency",
  tech: ["Next.js", "React", "Tailwind CSS"],
  d: "Designed and developed a modern digital agency website with a premium UI, responsive layouts, smooth animations, and SEO-friendly architecture to effectively showcase services and portfolio.",
  r: "Agency Website",
  img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop"
},
];

const why = [
  {
    i: "💻",
    t: "Custom Development",
    d: "We build scalable websites, mobile apps, and digital platforms tailored to your business goals."
  },
  {
    i: "🛒",
    t: "E-Commerce Expertise",
    d: "From WooCommerce to Shopify, we create secure, high-converting online stores that drive sales."
  },
  {
    i: "🚀",
    t: "SEO & Digital Growth",
    d: "Our SEO and digital marketing strategies help improve visibility, attract quality traffic, and grow your business."
  },
  {
    i: "🎨",
    t: "Creative Branding",
    d: "We craft memorable brand identities with impactful designs that help businesses stand out."
  },
  {
    i: "📱",
    t: "Marketing That Converts",
    d: "From social media to content and email marketing, we create campaigns that engage and generate leads."
  },
  {
    i: "🤝",
    t: "Dedicated Support",
    d: "We work as your technology partner, providing reliable support and continuous improvements after launch."
  }
];

const steps = [
  {n:"01",t:"Discovery",d:"We audit your brand, competitors, and market to uncover the biggest growth levers."},
  {n:"02",t:"Strategy",d:"A tailored roadmap covering channels, budgets, messaging, and KPIs."},
  {n:"03",t:"Execution",d:"Our team ships campaigns, creative, and assets with speed and craft."},
  {n:"04",t:"Optimization",d:"Continuous testing and analytics keep every dollar performing."},
  {n:"05",t:"Scaling",d:"We compound winning strategies to grow revenue predictably."},
];

// const testimonials = [
//   {n:"Ayesha Khan",c:"Founder, Manatee",p:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",r:"NeroDevs completely transformed our paid social. Revenue 4x'd in six months and CAC dropped by half. Best partner we've had."},
//   {n:"Daniel Reeves",c:"CMO, FinPeak",p:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80&auto=format&fit=crop",r:"Their SEO strategy is next-level. We now rank for the exact queries our buyers search — organic became our #1 channel."},
//   {n:"Priya Sharma",c:"Director, Aeris Studio",p:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",r:"The rebrand and website they delivered feel like a $50k project. Inbound leads tripled in the first quarter after launch."},
//   {n:"Marcus Ortiz",c:"CEO, GreenLeaf",p:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80&auto=format&fit=crop",r:"Transparent reporting, fast execution, and constant CRO wins. Our checkout conversion has never been higher."},
//   {n:"Sofia Bennett",c:"Growth, PulseFit",p:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",r:"They treated our launch like it was their own product. Installs blew past every forecast we set."},
//   {n:"Jamal Wright",c:"Head of Marketing, Northwind",p:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",r:"Strategic thinkers and sharp executors. Our enterprise pipeline is 5x what it was a year ago."},
// ];

// ---------- Render ----------
const $ = (s) => document.querySelector(s);

$("#servicesGrid").innerHTML = services.map(s=>`
  <div class="glass card reveal">
    <div class="card-ico grad-bg">${s.i}</div>
    <h3>${s.t}</h3><p>${s.d}</p>
  </div>`).join("");

$("#portfolioGrid").innerHTML = projects.map(p=>`
  <article class="glass pcard reveal">
    <div class="pcard-img">
      <div class="pcard-tags"><span class="p-industry">${p.ind}</span><span class="p-result">${p.r}</span></div>
      <img src="${p.img}" alt="${p.n}" loading="lazy"/>
    </div>
    <div class="pcard-body">
      <h3>${p.n}</h3><p>${p.d}</p>
      <div class="tech-tags">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div>
    </div>
  </article>`).join("");

$("#whyGrid").innerHTML = why.map(w=>`
  <div class="glass why-card reveal">
    <div class="why-ico">${w.i}</div>
    <div><h3>${w.t}</h3><p>${w.d}</p></div>
  </div>`).join("");

$("#timeline").innerHTML = steps.map((s,i)=>{
  const isLeft = i%2===0;
  return `<div class="tl-row ${isLeft?'right':'left'} reveal">
    <div class="glass tl-card a"><div class="tl-num grad">${s.n}</div><h3>${s.t}</h3><p>${s.d}</p></div>
    <div class="tl-dot b"></div>
    <div class="c"></div>
  </div>`;
}).join("");

// $("#testGrid").innerHTML = testimonials.map(t=>`
//   <div class="glass tcard reveal">
//     <div class="stars">★★★★★</div>
//     <blockquote>"${t.r}"</blockquote>
//     <div class="tcard-foot">
//       <img src="${t.p}" alt="${t.n}" loading="lazy"/>
//       <div><div class="n">${t.n}</div><div class="c">${t.c}</div></div>
//     </div>
//   </div>`).join("");

// ---------- Preloader ----------
window.addEventListener("load", ()=>{
  setTimeout(()=>{
    $("#preloader").classList.add("hide");
    setTimeout(()=>$("#preloader").remove(), 500);
  }, 600);
});

// ---------- Navbar scroll ----------
const nav = $("#nav");
const progress = $("#progress");
const backTop = $("#backTop");
window.addEventListener("scroll", ()=>{
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y>20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (y/h*100)+"%";
  backTop.classList.toggle("show", y>500);
});
backTop.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));

// ---------- Mobile menu ----------
const menuBtn = $("#menuBtn");
const mobile = $("#mobileMenu");
menuBtn.addEventListener("click", ()=>mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>mobile.classList.remove("open")));

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  });
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// ---------- Animated counters ----------
const countIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix||"";
    const dur = 1600, start = performance.now();
    const tick = (now)=>{
      const p = Math.min(1,(now-start)/dur);
      const v = Math.round((1-Math.pow(1-p,3))*target);
      el.textContent = v+suffix;
      if(p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
},{threshold:.5});
document.querySelectorAll("[data-count]").forEach(el=>countIO.observe(el));

// ---------- Contact form ----------
const form = $("#contactForm");
const msg = $("#formMsg");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if(!d.name || !d.email || !d.message){
    toast("Please fill in name, email, and message.","err");
    return;
  }
  const btn = form.querySelector("button");
  btn.disabled = true; btn.textContent = "Sending...";
  setTimeout(()=>{
    btn.disabled = false; btn.textContent = "Send Message →";
    form.reset();
    toast("Thanks! We'll be in touch within 24 hours.","ok");
  },900);
});

function toast(text,type){
  const t = $("#toast");
  t.textContent = text;
  t.className = "toast show "+(type||"");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>t.classList.remove("show"),3500);
}
