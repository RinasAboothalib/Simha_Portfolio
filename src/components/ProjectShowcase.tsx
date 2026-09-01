import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  ArrowLeftRight, 
  LayoutDashboard, 
  MessageSquare, 
  KeyRound, 
  ShieldCheck, 
  UploadCloud, 
  CalendarClock, 
  Star, 
  Database, 
  Smartphone, 
  BookOpen, 
  CheckCircle2, 
  Bot, 
  Send, 
  User, 
  Clock, 
  ExternalLink,
  BookMarked,
  Filter,
  Check,
  RefreshCw,
  Plus
} from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { ActiveTabType } from '../types';

interface SampleBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  condition: string;
  owner: string;
  rating: number;
  aiSummary: string;
  available: boolean;
}

const SAMPLE_BOOKS: SampleBook[] = [
  {
    id: '1',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    genre: 'Software Engineering',
    condition: 'Like New',
    owner: 'Fathima S.',
    rating: 4.9,
    aiSummary: 'A foundational guide providing essential practices, principles, and heuristics for writing readable, maintainable, and robust software architectures.',
    available: true,
  },
  {
    id: '2',
    title: 'Don\'t Make Me Think, Revisited',
    author: 'Steve Krug',
    genre: 'UX & Usability',
    condition: 'Good',
    owner: 'Kamal R.',
    rating: 4.8,
    aiSummary: 'A witty, common-sense guide to intuitive web design and navigation ergonomics that empowers designers to eliminate user friction.',
    available: true,
  },
  {
    id: '3',
    title: 'Laravel: Up & Running (3rd Ed)',
    author: 'Matt Stauffer',
    genre: 'Web Development',
    condition: 'Excellent',
    owner: 'Nimal T.',
    rating: 4.7,
    aiSummary: 'A comprehensive walkthrough of the Laravel framework covering Eloquent ORM, Blade templating, authentication, and REST API development.',
    available: false,
  },
];

export const ProjectShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<SampleBook>(SAMPLE_BOOKS[0]);
  
  // Interactive AI Description generator states
  const [customBookTitle, setCustomBookTitle] = useState('Designing Data-Intensive Applications');
  const [customGenre, setCustomGenre] = useState('Distributed Systems & Architecture');
  const [generatedAiDesc, setGeneratedAiDesc] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Exchange simulation
  const [exchangeRequested, setExchangeRequested] = useState(false);
  const [meetingPlace, setMeetingPlace] = useState('ATI Trincomalee Campus Library, 1st Floor');
  const [meetingDate, setMeetingDate] = useState('2026-09-05 at 14:00');

  const handleGenerateAiDescription = () => {
    setIsGenerating(true);
    setGeneratedAiDesc(null);
    setTimeout(() => {
      setGeneratedAiDesc(
        `"${customBookTitle}" is an authoritative masterwork exploring data storage engines, indexing, replication, partitioning, and transaction boundaries. Ideal for software engineering students and developers seeking to build resilient, fault-tolerant distributed web architectures.`
      );
      setIsGenerating(false);
    }, 900);
  };

  const filteredBooks = SAMPLE_BOOKS.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="project" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
            <span>03 / PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
            Featured Academic Project
          </h2>
          <p className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] mt-2 max-w-2xl">
            A comprehensive, full stack platform developed with Laravel, PHP, MySQL, and OpenAI API to streamline student and community book sharing.
          </p>
        </div>

        {/* Large Project Showcase Card */}
        <div className="rounded-3xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-xl overflow-hidden mb-16">
          
          {/* Top Project Banner Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FBEAF0] via-[#F6D7E3]/40 to-[#FFF9FB] dark:from-[#2A1D2B] dark:via-[#241A25] dark:to-[#171218] border-b border-[#F6D7E3] dark:border-[#3D273E] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9FB] dark:bg-[#1F1722] border border-[#D85C8B]/30 text-xs font-bold text-[#8E3D62] dark:text-[#E56B9F]">
                <Sparkles className="w-3.5 h-3.5 text-[#D85C8B]" />
                <span>{FEATURED_PROJECT.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB]">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] max-w-3xl leading-relaxed">
                {FEATURED_PROJECT.summary}
              </p>
            </div>

            {/* Tech Stack Row */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0 max-w-md">
              {FEATURED_PROJECT.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#FFF9FB] dark:bg-[#1F1722] text-[#3B193F] dark:text-[#FFF7FB] border border-[#D85C8B]/30 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Mockup Workstation */}
          <div className="p-6 sm:p-8 bg-[#FBEAF0]/20 dark:bg-[#171218]/40">
            
            {/* Viewport & View Mode Navigation Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F6D7E3] dark:border-[#3D273E]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#D85C8B]/80" />
                <span className="w-3 h-3 rounded-full bg-[#B08DD9]/80" />
                <span className="w-3 h-3 rounded-full bg-[#8E3D62]/80" />
                <span className="text-xs font-mono text-[#746A73] dark:text-[#BAAEB7] ml-2">
                  System Preview • MVC Web Interface
                </span>
              </div>

              {/* Mockup Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                <button
                  onClick={() => setActiveTab('browse')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'browse'
                      ? 'bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white shadow-2xs'
                      : 'text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E]'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Book Browsing</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai-desc')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'ai-desc'
                      ? 'bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white shadow-2xs'
                      : 'text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E]'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Synopsis Generator</span>
                </button>

                <button
                  onClick={() => setActiveTab('exchange')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'exchange'
                      ? 'bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white shadow-2xs'
                      : 'text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E]'
                  }`}
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>Exchange & Scheduling</span>
                </button>

                <button
                  onClick={() => setActiveTab('admin')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'admin'
                      ? 'bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white shadow-2xs'
                      : 'text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E]'
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Admin Panel</span>
                </button>
              </div>
            </div>

            {/* TAB 1: Book Browsing & Catalog Showcase */}
            {activeTab === 'browse' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Search & Filter Header */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-[#8E3D62] dark:text-[#E56B9F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search books by title, author, or discipline..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#746A73] dark:text-[#BAAEB7] font-medium hidden sm:inline">
                      Catalog: {filteredBooks.length} titles
                    </span>
                  </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredBooks.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => setSelectedBook(book)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedBook.id === book.id
                          ? 'bg-[#FFF9FB] dark:bg-[#241A25] border-[#D85C8B] shadow-md ring-2 ring-[#D85C8B]/30'
                          : 'bg-[#FFF9FB] dark:bg-[#241A25] border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B]/50'
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FBEAF0] dark:bg-[#1F1722] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E]">
                            {book.genre}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            book.available
                              ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                              : 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                          }`}>
                            {book.available ? '● Available' : '● Exchange Pending'}
                          </span>
                        </div>

                        <h4 className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB] leading-snug line-clamp-2">
                          {book.title}
                        </h4>
                        
                        <p className="text-xs text-[#746A73] dark:text-[#BAAEB7]">
                          by <strong className="text-[#1F1B24] dark:text-[#FFF7FB]">{book.author}</strong>
                        </p>

                        <p className="text-xs text-[#1F1B24]/80 dark:text-[#FFF7FB]/80 line-clamp-2 italic bg-[#FBEAF0]/30 dark:bg-[#171218]/40 p-2.5 rounded-lg border border-[#F6D7E3]/60 dark:border-[#3D273E]">
                          "{book.aiSummary}"
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#F6D7E3] dark:border-[#3D273E] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-[#D85C8B]">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-bold">{book.rating}</span>
                        </div>
                        <span className="text-[#746A73] dark:text-[#BAAEB7]">Owner: {book.owner}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected Book Interactive Drawer / Details Preview */}
                <div className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#D85C8B]/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#D85C8B]" />
                      <span className="font-bold text-sm text-[#3B193F] dark:text-[#FFF7FB]">
                        Selected: {selectedBook.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#746A73] dark:text-[#BAAEB7]">
                      Condition: <strong>{selectedBook.condition}</strong> • Owner: <strong>{selectedBook.owner}</strong> • Location: <strong>Trincomalee Campus</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <button
                      onClick={() => {
                        setActiveTab('exchange');
                        setExchangeRequested(false);
                      }}
                      className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white text-xs font-semibold hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                      <span>Request Exchange</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('ai-desc')}
                      className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-[#FBEAF0] dark:bg-[#1F1722] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E] text-xs font-semibold hover:border-[#D85C8B] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Insights</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: AI Book Description Generator Interactive Showcase */}
            {activeTab === 'ai-desc' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B193F] to-[#D85C8B] flex items-center justify-center text-white">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#3B193F] dark:text-[#FFF7FB]">
                        OpenAI API Integration: AI-Assisted Book Description
                      </h4>
                      <p className="text-xs text-[#746A73] dark:text-[#BAAEB7]">
                        Automatically synthesizes book titles, authors, and genres into concise, high-value synopsis blurbs for readers.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] mb-1.5">
                        Book Title
                      </label>
                      <input
                        type="text"
                        value={customBookTitle}
                        onChange={(e) => setCustomBookTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBEAF0]/30 dark:bg-[#1F1722] border border-[#F6D7E3] dark:border-[#3D273E] text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] mb-1.5">
                        Subject / Genre
                      </label>
                      <input
                        type="text"
                        value={customGenre}
                        onChange={(e) => setCustomGenre(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBEAF0]/30 dark:bg-[#1F1722] border border-[#F6D7E3] dark:border-[#3D273E] text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-2 focus:ring-[#D85C8B]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleGenerateAiDescription}
                      disabled={isGenerating}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D85C8B] via-[#8E3D62] to-[#3B193F] text-white text-xs sm:text-sm font-semibold shadow-xs hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Synthesizing with OpenAI...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Generate AI Synopsis</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-[#746A73] dark:text-[#BAAEB7]">
                      Prompt engineering: Generates concise 2-sentence synopsis + key themes
                    </span>
                  </div>

                  {/* AI Output preview */}
                  <div className="p-4 rounded-xl bg-[#FBEAF0]/50 dark:bg-[#1F1722] border border-[#D85C8B]/30 min-h-[100px] flex flex-col justify-center">
                    {generatedAiDesc ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#8E3D62] dark:text-[#E56B9F]">
                          <CheckCircle2 className="w-4 h-4 text-[#D85C8B]" />
                          <span>AI Synopsis Generated Successfully</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#1F1B24] dark:text-[#FFF7FB] leading-relaxed italic">
                          {generatedAiDesc}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] text-center italic">
                        Click "Generate AI Synopsis" to trigger the simulated OpenAI API response stream.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: Exchange & Meeting Scheduler */}
            {activeTab === 'exchange' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Left: Exchange request parameters */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-[#3B193F] dark:text-[#FFF7FB]">
                      Peer-to-Peer Exchange & Schedule
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F6D7E3] dark:bg-[#8E3D62]/40 text-[#8E3D62] dark:text-[#E56B9F]">
                      Active Request #EX-208
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="font-semibold text-[#8E3D62] dark:text-[#E56B9F] block mb-1">
                        Book to Receive
                      </label>
                      <div className="p-2.5 rounded-lg bg-[#FBEAF0]/40 dark:bg-[#1F1722] border border-[#F6D7E3] dark:border-[#3D273E] font-medium text-[#1F1B24] dark:text-[#FFF7FB]">
                        {selectedBook.title} ({selectedBook.owner})
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold text-[#8E3D62] dark:text-[#E56B9F] block mb-1">
                        Meeting Physical Location
                      </label>
                      <input
                        type="text"
                        value={meetingPlace}
                        onChange={(e) => setMeetingPlace(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#FBEAF0]/30 dark:bg-[#1F1722] border border-[#F6D7E3] dark:border-[#3D273E] text-xs text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-1 focus:ring-[#D85C8B]"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-[#8E3D62] dark:text-[#E56B9F] block mb-1">
                        Agreed Date & Time
                      </label>
                      <input
                        type="text"
                        value={meetingDate}
                        onChange={(e) => setMeetingDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#FBEAF0]/30 dark:bg-[#1F1722] border border-[#F6D7E3] dark:border-[#3D273E] text-xs text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none focus:ring-1 focus:ring-[#D85C8B]"
                      />
                    </div>

                    <button
                      onClick={() => setExchangeRequested(true)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white font-semibold text-xs shadow-xs hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {exchangeRequested ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Exchange Request Confirmed & Notified</span>
                        </>
                      ) : (
                        <>
                          <ArrowLeftRight className="w-4 h-4" />
                          <span>Submit Exchange Proposal</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right: Private User Chat Mockup */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between border-b border-[#F6D7E3] dark:border-[#3D273E] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#D85C8B] text-white flex items-center justify-center text-xs font-bold">
                        FS
                      </div>
                      <div>
                        <span className="font-bold text-xs text-[#3B193F] dark:text-[#FFF7FB] block">
                          Chat with {selectedBook.owner}
                        </span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                          ● Online • Verified Student
                        </span>
                      </div>
                    </div>
                    <MessageSquare className="w-4 h-4 text-[#D85C8B]" />
                  </div>

                  <div className="space-y-2.5 text-xs max-h-48 overflow-y-auto">
                    <div className="bg-[#FBEAF0] dark:bg-[#1F1722] p-2.5 rounded-xl rounded-tl-none max-w-[85%] text-[#1F1B24] dark:text-[#FFF7FB]">
                      Hello! Is "{selectedBook.title}" available for exchange this Thursday?
                    </div>
                    <div className="bg-[#D85C8B] text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] ml-auto">
                      Yes, it is! Let's meet at {meetingPlace}.
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#F6D7E3] dark:border-[#3D273E]">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-1.5 rounded-lg bg-[#FBEAF0]/30 dark:bg-[#1F1722] border border-[#F6D7E3] dark:border-[#3D273E] text-xs text-[#1F1B24] dark:text-[#FFF7FB] focus:outline-none"
                    />
                    <button className="p-2 rounded-lg bg-[#8E3D62] text-white cursor-pointer hover:opacity-90">
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: Admin Dashboard Control Panel */}
            {activeTab === 'admin' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Admin Top KPI Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                    <span className="text-xs text-[#746A73] dark:text-[#BAAEB7]">Total Books</span>
                    <p className="text-xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] mt-1">128</p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400">↑ 14 this week</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                    <span className="text-xs text-[#746A73] dark:text-[#BAAEB7]">Verified Users</span>
                    <p className="text-xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] mt-1">94</p>
                    <span className="text-[10px] text-[#8E3D62] dark:text-[#E56B9F]">100% OTP verified</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                    <span className="text-xs text-[#746A73] dark:text-[#BAAEB7]">Completed Exchanges</span>
                    <p className="text-xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] mt-1">62</p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400">Zero disputes</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                    <span className="text-xs text-[#746A73] dark:text-[#BAAEB7]">AI Synopses Generated</span>
                    <p className="text-xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] mt-1">112</p>
                    <span className="text-[10px] text-[#B08DD9]">OpenAI API GPT</span>
                  </div>
                </div>

                {/* Audit & Verification Log Table */}
                <div className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-sm text-[#3B193F] dark:text-[#FFF7FB]">
                      Administrative Moderation & Verification Stream
                    </h4>
                    <span className="text-xs font-mono text-[#8E3D62] dark:text-[#E56B9F]">
                      MySQL Logs • Active
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#F6D7E3] dark:border-[#3D273E] text-[#746A73] dark:text-[#BAAEB7]">
                          <th className="pb-2">User / Student</th>
                          <th className="pb-2">Activity</th>
                          <th className="pb-2">Status</th>
                          <th className="pb-2">Timestamp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F6D7E3]/60 dark:divide-[#3D273E]">
                        <tr>
                          <td className="py-2.5 font-semibold text-[#1F1B24] dark:text-[#FFF7FB]">simha2002</td>
                          <td className="py-2.5 text-[#746A73] dark:text-[#BAAEB7]">Uploaded "Clean Code"</td>
                          <td className="py-2.5"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-[10px]">Approved</span></td>
                          <td className="py-2.5 text-[#746A73] dark:text-[#BAAEB7]">Today, 10:24 AM</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-semibold text-[#1F1B24] dark:text-[#FFF7FB]">kamal_ati</td>
                          <td className="py-2.5 text-[#746A73] dark:text-[#BAAEB7]">OTP Email Verification Passed</td>
                          <td className="py-2.5"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-[10px]">Verified</span></td>
                          <td className="py-2.5 text-[#746A73] dark:text-[#BAAEB7]">Yesterday, 04:12 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-semibold text-[#1F1B24] dark:text-[#FFF7FB]">nimal_sliate</td>
                          <td className="py-2.5 text-[#746A73] dark:text-[#BAAEB7]">Exchange #EX-204 Completed</td>
                          <td className="py-2.5"><span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-[10px]">Archived</span></td>
                          <td className="py-2.5 text-[#746A73] dark:text-[#BAAEB7]">Aug 30, 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

        </div>

        {/* Real Project Features Grid (12 Verified Capabilities) */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#3B193F] dark:text-[#FFF7FB]">
              Verified Platform Features
            </h3>
            <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] mt-1">
              Engineered architecture covering security, user privacy, coordination, and automated intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {FEATURED_PROJECT.features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B]/60 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] mb-3 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={feature.icon} className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors leading-snug">
                  {feature.title}
                </h4>
                <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] leading-relaxed mt-1.5">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
