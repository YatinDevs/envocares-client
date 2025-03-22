import React, { useState } from "react";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import BlogList from "./BlogList";
import BlogHeroSection from "./BlogHeroSection";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {/* Hero Section */}
      <BlogHeroSection onSearch={handleSearch} />

      {/* Blog Content */}
      <ContentWrapper>
        <BlogList searchQuery={searchQuery} />
      </ContentWrapper>
    </div>
  );
}
