"use client";

import Image from "next/image";
import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { useGetSingleTipQuery } from "@/redux/features/tips/tips.api";

function TipDetailPage({id}: {id: string}) {
  
  const { data: tipData } = useGetSingleTipQuery(id);

  console.log("tipData:", tipData);

  const { title, content, category, image } = tipData?.data || {};

  return (
    <div className="min-h-screen dark:bg-black bg-white dark:text-white text-black">
      {/* Back Button */}
      <div className="p-6">
        <Link
          href="/tips"
          className="inline-flex items-center gap-2 dark:text-white text-black hover:opacity-70 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Tips</span>
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={
              image ||
              "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format"
            }
            alt={"Tip Image"}
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay matching your card style */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#02cc6e25] via-[#02cc6e5b] to-[#02cc6e]"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Category Badge */}
          {category && (
            <div className="inline-flex items-center gap-2 bg-[#02cc6e] text-white px-4 py-2 rounded-md">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          )}

          {/* Title */}
           <h1 className="text-3xl md:text-4xl font-bold leading-tight capitalize">
            {title}
          </h1> 

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="dark:text-gray-300 text-gray-700 leading-relaxed">
              {/* Simple content rendering - you can enhance this based on your content format */}
              
                <div className="space-y-4">
                  <p>{content}</p>
                </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipDetailPage;
