"use client";
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import { FaPlay, FaPause } from "react-icons/fa"
import { useState, useRef } from "react"
import Photo from "@/components/ui/Photo"
import Stats from "@/components/ui/Stats"


function Page() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-4">

          <div className="flex flex-col text-center xl:text-left order-2 xl:order-none mt-8 xl:mt-0">
            <span>To the One Who Commands My Days ..</span>
            <h1 className="font-semibold text-[30px] xl:text-[45px] leading-[1.1] mt-2">
              How else could I <br />
              <span className="">say sorry to you?</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 mt-4">
              This is me, asking for forgiveness and showing how much you mean to me.
            </p>

            {/* BUTTONS ROW */}
            <div className="flex flex-col  md:flex-row items-center justify-center xl:justify-start gap-6">

              {/* Download Button */}
              <a href="/assets/apology.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  my apology <FiDownload className="text-2xl" />
                </Button>
              </a>

              {/* Play Button */}
              <Button 
                onClick={togglePlay}
                variant="outline"
                size="xl"
                className="uppercase flex items-center gap-2 px-6"
              >
                {isPlaying ? "Pause" : "Play"} 
                {isPlaying ? <FaPause /> : <FaPlay />}
              </Button>
            </div>

            <audio ref={audioRef} src="/music/apology-song.mp3"></audio>
          </div>

          <div>
            <Photo className="order-1 flex justify-center xl:order-none mb-12 xl:mb-0" />
          </div>

        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Page
