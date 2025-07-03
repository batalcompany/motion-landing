"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventPage() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  useEffect(() => {
    if (!isVisible && showModal) {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, showModal]);

  useEffect(() => {
    if (showModal) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.backgroundColor = "#e8f4ed";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.backgroundColor = "";
    };
  }, [showModal]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 md:px-10 py-4 bg-[#e8f4ed]">
        <Image
          src="/motion-logo.svg"
          alt="motion logo"
          width={180}
          height={180}
          draggable={false}
          className="select-none pointer-events-none"
        />
        <nav className="flex items-center space-x-7">
          <button
            onClick={openModal}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            문의
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <section className="bg-[#e8f4ed] min-h-[calc(100vh-60px)] flex items-start md:items-center pt-20 md:pb-40">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 flex md:flex-row flex-col justify-between items-center gap-8 w-full -mt-8">

          <div>

            <h1 className="text-5xl font-bold leading-tight mb-4">
              게시물 올리고 <br />
              5,000원 받기!
            </h1>
            <h1 className="text-2xl font-bold leading-tight mb-4">
              정보도 교류하고 돈도 받자.
            </h1>
            <p className="text-[17px] text-gray-800 mb-5">
              남양주 관련 생활 정보, 동네 사건 또는 <br />
              일상, 고민, 질문, 이야기를 포럼에 게시.
            </p>
            <p className="text-[17px] text-gray-800 mb-5">
              참여 방법  <br />
              1. 남양주 위치 포럼에 글 올림 <br />
              2. 커피 아이콘 누르고 입금 정보 전송 <br />
              3. 입금 확인하고 모션 더 즐기기! <br />
            </p>
            <p className="text-[17px] text-gray-800 mb-12">
              기한: 선착순 200명 <br />
              대상: 현재 남양주 거주민 <br />
            </p>
            <div className="text-gray-700 mb-10 md:mb-4">
              <button
                onClick={() => {
                  const userAgent = window.navigator.userAgent.toLowerCase();
                  const isMac = userAgent.includes("mac");
                  const isWindows = userAgent.includes("win");

                  if (isMac) {
                    window.open("https://vo.la/bYwNxr", "_blank");
                  } else if (isWindows) {
                    window.open("https://vo.la/AHWuxxE", "_blank");
                  } else {
                    // fallback: open Google Play link
                    window.open("https://linktr.ee/motioncommunity", "_blank");
                  }
                }}
                className="bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors block w-full text-center"
              >
                시작하기
              </button>

            </div>
          </div>
          <div className="flex justify-center w-full max-w-[360px]">
            <div className="relative w-full" style={{ aspectRatio: '1 / 2' }}>
              <Image
                src="/phone_5.png"
                alt="Motion App Interface"
                fill
                style={{ objectFit: 'contain' }}
                className="select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-8">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/motion-logo.svg"
              alt="Download on App Store"
              width={150}
              height={150}
              className="mb-2 select-none pointer-events-none"  // Adds space below the image
              draggable={false}
            />
            <p className="text-gray-700 text-sm">모두에 의한 커뮤니티</p>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>문의: batal8812@gmail.com</p>
            <div className="mt-1">
              <Link href="https://batalcompany.github.io/disclaimer/EULA.htm"
                className="text-gray-500 hover:text-gray-700 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                최종 사용자 라이선스 계약
              </Link>{" "}
              |
              <Link
                href="https://www.freeprivacypolicy.com/live/f66a7a60-b030-406e-8871-51beb25f387f"
                className="text-gray-500 hover:text-gray-700 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                개인정보 처리 방침
              </Link>
              |
              <Link href="https://batalcompany.github.io/disclaimer/disclaimer_kor.htm"
                className="text-gray-500 hover:text-gray-700 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                면책 조항
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isVisible ? "opacity-50" : "opacity-0"
              }`}
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg p-6 w-11/12 max-w-sm mx-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-black hover:text-gray-900 focus:outline-none"
                aria-label="Close contact modal"
              >
                &#x2715;
              </button>
              <h2 className="text-lg font-semibold mb-4 text-black">이메일</h2>
              <p className="text-black break-words select-all">batal8812@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}