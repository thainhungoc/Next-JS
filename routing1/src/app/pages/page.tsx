import React from 'react';

interface PageProps {
  params: {
    pageId: number;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      home page
      page {params.pageId}
    </div>
  );
}
