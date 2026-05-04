export interface Transcript {
  id: string | number;
  duration: string;
  text: string;
}

export interface Chunk {
  id: string | number;
  page: string | number;
  text: string;
}

export interface EmbeddedChunks {
  id: string | number;
  embedding: any[];
  text: string;
}

export interface Video {
  id: string | number;
  title: string;
  duration: string;
  url: string;
  transcript: Transcript[];
}

export interface Pdf {
  id: string | number;
  title: string;
  url: string;
  chunks: Chunk[];
}

export interface Channel {
  id: string | number;
  title: string;
  description: string;
  content: {
    videos: Video[];
    pdfs: Pdf[];
  };
}
