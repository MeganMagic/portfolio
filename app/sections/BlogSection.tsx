import Link from "next/link";

import BlogCard from "@/components/BlogCard";

const BLOG_LINK = "https://velog.io/@mari";

const BlogSection = () => {
  return (
    <section>
      <h2>블로그</h2>
      <p className="section-title">문제 해결 과정을 블로그에 기록했습니다.</p>

      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-11">
        <BlogCard
          title="[TypeScript] openapi codegen에서 optional 삭제하기"
          date="2024.01.10"
          forwardLink="https://velog.io/@mari/remove-optional-in-openapi-typescript-codegen"
          bgImageUrl="https://velog.velcdn.com/images/mari/post/a3b2fe42-6509-445b-b31c-90340d5b58e9/image.png"
        />
        <BlogCard
          title="[Ant Design] token을 이용하여 컴포넌트 padding을 변경하기"
          date="2023.11.06"
          forwardLink="https://velog.io/@mari/Ant-Design-padding-custom-by-token"
          bgImageUrl="https://velog.velcdn.com/images/mari/post/f5573305-59b1-4775-aa6a-a0727830ad00/image.png"
        />
        <BlogCard
          title={`msw 에러 해결 "TypeError: Failed to execute 'text' on 'Response': body stream already read"`}
          date="2023.07.25"
          forwardLink="https://velog.io/@mari/msw-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-TypeError-Failed-to-execute-text-on-Response-body-stream-already-read"
          bgImageUrl="https://velog.velcdn.com/images/mari/post/2ba66315-da1c-40f1-ac76-6288cda6babf/image.png"
        />
      </div>

      <div className="flex md:justify-center">
        <Link className="no-underline " href={BLOG_LINK} target="_blank">
          <button className="w-full md:w-40 py-3 border border-black/15 rounded-md md:rounded-lg bg-transparent hover:bg-black/5 text-sm font-semibold text-black/45 hover:text-black/60">
            더 보기
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
