import Link from "next/link";

import BlogCard from "@/_components/BlogCard";
import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import prisma from "@/lib/prisma";

const BLOG_LINK = "https://velog.io/@mari";

async function getBlogs() {
  const response = await prisma.blog.findMany();
  return response;
}

export default async function BlogSection() {
  const blogs = await getBlogs();

  return (
    <SectionWatcher id="blog">
      <SlideUpInView>
        <h2>블로그</h2>
        <p className="section-description">문제 해결 과정을 블로그에 기록했습니다.</p>

        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-11">
          {blogs.map(props => (
            <BlogCard key={`blog-card-${props.id}`} {...props} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link className="no-underline w-full md:w-fit" href={BLOG_LINK} target="_blank">
            <button className="w-full md:w-40 py-3 border border-foreground/15 rounded-md md:rounded-lg bg-transparent hover:bg-foreground/5 text-sm font-semibold text-foreground/45 hover:text-foreground/60">
              더 보기
            </button>
          </Link>
        </div>
      </SlideUpInView>
    </SectionWatcher>
  );
}
