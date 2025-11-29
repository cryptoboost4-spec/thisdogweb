import type { FeatureCategory, PricingTier, Step, Testimonial, FaqItem, LogoOption, UseCase, TrustBadge } from './types';

export const LOGO_OPTIONS: LogoOption[] = [
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/rainbow.jpg?alt=media&token=214acbc9-b0d1-4fd4-a9f8-ff84bc2e49bf',
        alt: 'Rainbow and clouds logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/handshake.jpg?alt=media&token=de8e3bcb-9a6d-4e58-9108-e74d1e42040c',
        alt: 'Handshake logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/infinity.jpg?alt=media&token=d511707d-7f88-4051-9bd7-4dfed6104121',
        alt: 'Infinity symbol logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/friends.jpg?alt=media&token=a1e860db-97e5-4a80-8599-f4dc42a0d618',
        alt: 'Two besties with heart logo'
    },
    { 
        url: 'https://firebasestorage.googleapis.com/v0/b/claudebestiesweb.firebasestorage.app/o/doubleb.jpg.jpg?alt=media&token=b1073219-ea92-4a15-9dd5-8802ac111203',
        alt: 'BB letters logo'
    }
];

export const FEATURES_DATA: FeatureCategory[] = [
    {
        title: "CORE BESTIES FEATURES",
        emoji: "💕",
        items: [
            { icon: 'timer', title: 'Check-In Timers', description: "Set a quick check-in timer so your besties know when to expect you're safe." },
            { icon: 'notifications_off', title: "Only Alerts If You're NOT Safe", description: "No 'I got home' messages. You only tap one button: \"I'm Safe.\" If you don't, your besties get notified." },
            { icon: 'sms', title: 'Alerts Through Messenger & WhatsApp (Free)', description: "Your friends don't need the app. They get a simple message through platforms everyone already uses." },
            { icon: 'paid', title: 'SMS Alerts (Paid Tier)', description: "For friends not on Messenger or WhatsApp, you can enable SMS alerts to cover telecommunication costs." },
            { icon: 'cloud_off', title: 'Works Even If Your Phone Is Off', description: "The check-in is sent from the cloud, so besties are alerted even if your phone dies, loses reception, or gets lost." },
            { icon: 'group_add', title: 'Add Your Besties', description: "Choose your emergency support circle. Alerts go to all of them." },
            { icon: 'event_note', title: 'Optional Meeting Details', description: "Include where you went and who you're meeting. This is only sent if you miss your check-in." },
            { icon: 'touch_app', title: "One-Tap \"I'm Safe\"", description: "Tap once when things are all good. That's it." }
        ]
    },
    {
        title: "FRIENDSHIP FEATURES",
        emoji: "👯‍♀️",
        items: [
            { icon: 'favorite', title: 'Bestie Circles', description: "Add the people who look after you. They'll automatically be contacted if anything feels off." },
            { icon: 'history', title: 'Check-In History', description: "A simple list of your past timers so you can keep track." },
            { icon: 'dashboard', title: 'Bestie Dashboard', description: "See the timers you've set and the people responsible for checking on you." }
        ]
    },
    {
        title: "NIGHT OUT FEATURES",
        emoji: "🌙",
        items: [
            { icon: 'celebration', title: "Girls' Night Check-Ins", description: "Hopping between bars or clubs? Keep a simple check-in running so your girls know you're good." },
            { icon: 'directions_walk', title: 'Walk-Me-Home Timers', description: "Short timers you set while walking to your car, train, Uber, or home." }
        ]
    },
    {
        title: "SAFETY FEATURES",
        emoji: "❤️",
        items: [
            { icon: 'location_on', title: 'Emergency Location Sharing', description: "Your location is only sent to friends if you miss your check-in." },
            { icon: 'more_time', title: 'Add Extra Time', description: "Running late? Extend your timer in one tap." },
            { icon: 'groups', title: 'Multi-Bestie Alerts', description: "If one bestie doesn't respond, the message goes to everyone you've selected." }
        ]
    }
];

export const PRICING_DATA: PricingTier[] = [
    {
        title: "FREE TIER (Forever)",
        subtitle: "All the core features you need to stay safe.",
        icon: 'favorite',
        highlight: false,
        features: [
            "Unlimited Besties", 
            "Messenger alerts", 
            "WhatsApp alerts", 
            "\"I'm Safe\" button",
            "Check-in timers", 
            "Meeting details", 
            "Check-in history", 
            "Walk-me-home timers",
            "Girls' Night timers"
        ],
        footer: "Completely free. Forever."
    },
    {
        title: "BESTIES+ (Paid)",
        subtitle: "You only pay if you want SMS alerts.",
        icon: '💘',
        highlight: true,
        features: [
            "SMS alerts to any mobile number", 
            "Faster delivery", 
            "Higher reliability for non-app users", 
            "Helps fund backend costs"
        ],
        footer: "No subscription needed unless you want SMS."
    }
];

export const HOW_IT_WORKS_DATA: Step[] = [
    { title: "Set a check-in time", description: "Tell the app when you expect to be safe." },
    { title: "Add the friends who'll check on you", description: "Messenger, WhatsApp, or SMS." },
    { title: "Live your life", description: "Go to your date, event, meetup, appointment." },
    { title: "Tap \"I'm Safe\"", description: "If everything is good." },
    { title: "No tap = your besties get alerted", description: "Simple. Automatic. Real support." }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { quote: "Me and my girls literally use this every time one of us goes on a date. It's like having them right there with me.", author: "Steph, 24" },
    { quote: "Besties does what we've been doing manually for years — but way better. I don't have to remember to text anymore!", author: "Chloe, 27" },
    { quote: "No more guilt texts when I forget to answer. The app has my back and my besties know I'm safe.", author: "Lily, 22" },
    { quote: "Finally, an app that actually gets what we need. It's like having your best friend looking out for you 24/7.", author: "Anna, 25" },
    { quote: "I use it every time I walk home from the bar. My roommate loves it too — she doesn't have to stay up worrying.", author: "Maya, 23" },
    { quote: "This is genius. Why didn't this exist sooner? It's so simple but makes me feel so much safer.", author: "Jessica, 26" }
];

export const USE_CASES_DATA: UseCase[] = [
    {
        emoji: "💕",
        title: "First Dates & Meeting New People",
        description: "Going on a date with someone you met online? Your besties have your back.",
        examples: [
            "First date from a dating app",
            "Meeting an online friend IRL",
            "Coffee with someone new",
            "That cute guy from the gym"
        ]
    },
    {
        emoji: "🌙",
        title: "Night Out Safety",
        description: "Out late? Walking home alone? Your besties know you're safe.",
        examples: [
            "Walking home from the bar",
            "Girls' night out clubbing",
            "Taking an Uber late at night",
            "Walking to your car after work"
        ]
    },
    {
        emoji: "✈️",
        title: "Travel & Adventures",
        description: "Exploring somewhere new? Keep your people in the loop.",
        examples: [
            "Solo travel in a new city",
            "Exploring unfamiliar neighborhoods",
            "Hiking or outdoor adventures",
            "Staying in a new place"
        ]
    },
    {
        emoji: "🏃‍♀️",
        title: "Everyday Safety",
        description: "Simple peace of mind for daily activities.",
        examples: [
            "Morning jog in the park",
            "Walking the dog at night",
            "Late night at the office",
            "Long commute home"
        ]
    }
];

export const TRUST_BADGES_DATA: TrustBadge[] = [
    {
        icon: 'favorite',
        title: 'Free Forever',
        description: 'All core safety features are completely free. No hidden fees, no surprises.'
    },
    {
        icon: 'lock',
        title: 'Privacy First',
        description: 'Your data is yours. We never sell it, track you, or share it without permission.'
    },
    {
        icon: 'group',
        title: 'No App Required',
        description: 'Your besties get alerts via text, WhatsApp, or Messenger — no download needed.'
    },
    {
        icon: 'verified',
        title: 'Made by People Who Care',
        description: 'Built by people who genuinely want to keep you safe. Safety over profit, always.'
    }
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: "Is Besties really free?",
        answer: "Yes! All core safety features are 100% free forever. We offer optional SMS alerts ($1/month) but you never have to pay. Keeping you safe is more important than profit."
    },
    {
        question: "Do my friends need the app?",
        answer: "Nope! They can receive alerts via SMS, WhatsApp, or Facebook Messenger even without downloading anything. They just need to accept your invite."
    },
    {
        question: "Does it track my location all the time?",
        answer: "Never! Your location is only shared during active check-ins — and only sent to your besties if you miss checking in. We don't track you when you're not using it."
    },
    {
        question: "What happens if I forget to check in?",
        answer: "Your besties will get automatic alerts with your last known location and any details you shared. You'll also get reminder notifications before the timer runs out (10min, 5min, 1min)."
    },
    {
        question: "Can I use this for first dates?",
        answer: "Absolutely! That's one of the most popular uses. Set a check-in timer, add your besties, and go on your date. If you don't check in, they'll know something's up."
    },
    {
        question: "What if my phone dies?",
        answer: "Your check-in is sent from the cloud, so even if your phone dies, loses signal, or gets lost, your besties will still be alerted when the timer runs out."
    },
    {
        question: "Is this a replacement for 911?",
        answer: "No! Besties is a safety tool for your friends, not emergency services. In a true emergency, always call 911 or local emergency services immediately."
    },
    {
        question: "How many besties can I add?",
        answer: "Add up to 5 trusted people to your safety circle. Choose the people who always have your back!"
    },
    {
        question: "What if I need more time?",
        answer: "No problem! Just tap \"Add Time\" in the app and extend your check-in by 15 minutes, 30 minutes, or 1 hour with one tap."
    },
    {
        question: "Is my data secure?",
        answer: "Yes! We use Google Firebase security, never sell your data, and you can delete everything anytime. Full transparency — check our privacy policy for details."
    }
];