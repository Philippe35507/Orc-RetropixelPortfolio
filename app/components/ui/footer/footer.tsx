"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <footer className="fixed bottom-5 left-5">
      <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
        <i className="nes-icon is-large star"></i>
      </button>
      {isShowModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10">
          <div className="nes-dialog w-[40rem] bg-white">
            <div className="flex justify-end">
              <button onClick={() => setIsShowModal(false)}>
                <i className="nes-icon close is-small"></i>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <i className="snes-jp-logo"></i>
              <p>My Projects</p>
              <Link href={"#"}>
                <div className="nes-container with-title is-dark">
                  <p className="title">Textual Games</p>
                  <p>
                    A nostalgic journey into the realm of classic MUD gaming
                    infused with an innovative twist of AI.
                  </p>
                </div>
              </Link>
              <Link href={"#"}>
                <div className="nes-container with-title ">
                  <p className="title">Orcish-ai-nextjs-framework</p>
                  <p>
                    It is a powerful tool that leverages the capabilities of
                    OpenAI API.
                  </p>
                </div>
              </Link>
              <Link href={"#"}>
                <div className="nes-container with-title is-dark">
                  <p className="title">Orcish-openai-connector</p>
                  <p>
                    A simple completion and image creator application powered by
                    OpenAI.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
