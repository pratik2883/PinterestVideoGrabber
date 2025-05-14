import { useState } from 'react';
import { FaqItem } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqItems: FaqItem[] = [
    {
      question: "Is this Pinterest video downloader free to use?",
      answer: "Yes, our Pinterest video downloader is completely free to use. There are no hidden charges or subscription fees. You can download as many videos as you want without any cost."
    },
    {
      question: "What Pinterest videos can I download?",
      answer: "You can download any public video from Pinterest using our tool. This includes videos from pins, boards, and user profiles that are publicly accessible."
    },
    {
      question: "Is it legal to download Pinterest videos?",
      answer: "Downloading videos for personal use is generally considered fair use. However, please respect copyright rules and do not redistribute or use downloaded content commercially without proper permissions."
    },
    {
      question: "How is the video quality of downloads?",
      answer: "We provide videos in the highest quality available from the source. Most Pinterest videos can be downloaded in HD quality, but the final quality depends on the original upload quality."
    },
    {
      question: "Do you store the videos I download?",
      answer: "No, we do not store any videos on our servers. Our tool works by processing the video URL on the client-side and providing a direct download link to your device. We don't keep any copies of downloaded content."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-[#767676] max-w-2xl mx-auto">Find answers to common questions about our Pinterest video downloader.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm overflow-hidden mb-4"
              >
                <AccordionTrigger className="px-6 py-4 font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#767676]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
