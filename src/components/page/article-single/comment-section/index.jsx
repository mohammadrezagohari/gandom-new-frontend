import React from "react";
import SectionTitle from "@/src/components/common/section-title";
// import MassageBox from "@/components/common/massage-box-form";
// import MessageSection from "@/components/article-single-page-sections/message-section";
import CoommentBox from "@/src/components/common/cards/comment-box";
import MessageSection from "../message-section";
// import MessageSection from '../../service-single/message-section';
// import MessageSection from '../message-section';

function CommentSection() {
  return (
    <section>
      <div className="my-[5%]">
        <MessageSection />
      </div>

      <SectionTitle classes="text-g21 " title="Comments" />

      <CoommentBox />
    </section>
  );
}

export default CommentSection;
