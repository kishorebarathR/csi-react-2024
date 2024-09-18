import React from "react"
import Image from "next/image"
const Filmspage = () => {
  return (
    <div>
      <div className=" p-8 text-center custom-container ">
        <h1 className="text-3xl font-bold mb-4">
          Centre f<span className="text-yellow-300 ">o</span>r Strategic
          Communications for Public Health
        </h1>

        <p className="text-2xl mb-6">PRESENTS</p>

        <h2 className="text-4xl font-bold text-[#7E3F98] mb-6">
          THE BIG PICTURE FILM FESTIVAL
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700">
          Welcome to the Centre for Strategic Communication for Public Health
          Film Showcase. Explore a curated selection of impactful films that
          delve into critical public health issues, innovative solutions, and
          the voices of those affected.
        </p>
      </div>

      <div className=" max-w-4xl mx-auto ">
      <div className="bg-white p-6 flex-col-reverse  flex lg:flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              01
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Cotton&apos;s Hidden Voices:
              <br />
              Women&apos;s Voices
            </h2>
            <p className="mb-4">
              The movie throws light on the crucial role women play in the
              modern textile supply chain. Despite being an integral part of the
              process, they are undervalued and paid less. The movie answers the
              question, &apos;What stories can these women tell us about their lives
              in the fashion industry?&apos;
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Produced by:</span> Prof Divya
                Singhal, Prof Bethan Bide, Prof Matthew Davis, Prof Mark Sumner,
                Dr Suganya G and Mr Siddhant Shah
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Directed by:</span> Goa
                Institute of Management, Noise Creative and Dranding Consulting
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 12 mins
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/cotton.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className=" max-w-4xl mx-auto  ">
        <div className="bg-white p-6  flex flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/gutter.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              02
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Gutter Ki Macchli
              <br />
              (Fish From The Sewer)
            </h2>

            <p className="mb-4">
              The animation film weaves together the voices of the children,
              youth, and women of a rehabilitation and resettlement colony in
              Govandi, Mumbai, through their drawings and poetry to vocalise,
              localise, and visualise their experiences of climate change in
              their poorly built homes and neighbourhood. Produced after a
              series of arts-based workshops, the film captures a local
              vocabulary of the people in the margins that is missing in the
              discourse around environmental and climate crises in urban spaces.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed by:</span> Natasha
                Sharma
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Produced by:</span>Community
                Design Agency & Global Resilience Partnership
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 9 mins 55 sec
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto ">
      <div className="bg-white p-6 flex-col-reverse  flex lg:flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              03
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Nature’s Shields
            </h2>
            <p className="mb-4">
              Nature&apos;s Shields takes you to diverse geographies of India that
              are climate-vulnerable, weaving voices of those who have
              experienced extreme climate effects and those who have been
              affected by rapid urbanisation that has shrunk precious water
              resources. The film brings evocative voices of communities taking
              charge of their environment and demonstrating the power of
              collective action both for the environment and people.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed by:</span> Nidheesh
                Tyagi (Head of Talking Fish Pvt Ltd)
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Produced by:</span>SEEDS
                Organisation
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 14 mins
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/nature.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto  ">
        <div className="bg-white p-6  flex flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/spring.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              04
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Where Springs Return…
            </h2>

            <p className="mb-4">
            &apos;Where Springs Return...&apos; is a social documentary film about Gram
              Vikas&apos; work on &apos;Community-Owned Social and Agroforestry for
              Protecting and Rejuvenating Water Sources.&apos; This film, featuring
              community members from Odisha, discusses various ways to improve
              land fertility, regrow forests, and increase groundwater levels.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Ajaya Behera and Gram Vikas
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 8 mins
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto ">
      <div className="bg-white p-6 flex-col-reverse  flex lg:flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              05
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Springs of Hope
            </h2>
            <p className="mb-4">
            &apos;Springs of Hope&apos; showcases the impact of the Swades Foundation&apos;s
              efforts in water, documenting the before and after of the
              intervention and the many lives and livelihoods transformed by it.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Sameer More and Swades Foundation
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span>11 mins 35
                seconds
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/hope.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto  ">
        <div className="bg-white p-6  flex flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-6.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              06
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Slowing the Spread of Dengue Fever
            </h2>

            <p className="mb-4">
              In recent years, dengue has emerged as a pressing global health
              concern, exacerbated by the effects of our changing climate. Yet,
              financial support for dengue control and community-based
              interventions remains limited, particularly in Asia. To tackle
              this challenge, AVPN joined forces with Takeda to shed light on
              opportunities for combating dengue due to climate change. Building
              on this collaboration, AVPN and Takeda co-created a compelling
              mini-documentary titled “Slowing the Spread of Dengue Fever” as
              part of the &apos;Healthier Together: A Path to A Better World&apos; series.
              Developed in consultation with the WHO Foundation and expertly
              produced for us by BBC StoryWorks Commercial Productions, this
              mini-documentary offers insights into innovative disease
              prevention and management approaches.
              
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                AVPN, Takeda and BBC Story Works
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 5 mins 32
                seconds
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto ">
      <div className="bg-white p-6 flex-col-reverse  flex lg:flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              07
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Obsolete | Bhangaar
            </h2>
            <p className="mb-4">
              An elderly couple from Mumbai asks the President and Supreme Court
              of India for the right to die together. As they await an official
              response, the film reveals their motivations behind such a desire.
              Surprisingly their quest to want to die gives the couple renewed
              purpose.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Sumira Roy and SOW films
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 64 mins 11 sec
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-7.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto  ">
        <div className="bg-white p-6  flex flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-8.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              08
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Dumpster Diving with Jaggery
            </h2>
            <p className="mb-4">
              With this documentary, the creators are attempting to take our
              viewers through the entire reutilization process of converting
              these scrap cart seat belts into contemporary products like
              messenger bags, laptop sleeves, home decor items, and adventure
              gear. The process has many fashionable names, &apos;upcycling&apos;,
              &apos;remanufacturing&apos;, &apos;circular design&apos;, etc, but for many Indians,
              the idea of &apos;punah prayog&apos; is one that&apos;s ingrained in our DNA.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Gautam Malik
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 14 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto ">
      <div className="bg-white p-6 flex-col-reverse  flex lg:flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              09
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Under the Indian Sky: Tales of Climate and Health - Part 1: Our
              Carers
            </h2>
            <p className="mb-4">
              Climate change is a public health crisis. This short film helps us
              see the impact of climate change on communities through the eyes
              of frontline health workers – doctors, nurses, and public health
              personnel – who find themselves not only as frontline health
              workers but also on the frontlines of this unprecedented crisis.
              Through their firsthand accounts, the film stitches together the
              health impact of climate change as experienced by communities.
              Come along with us on this journey to hear from people across
              India.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Swasti and Kamerakirriks
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 4 mins 23 sec
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-9.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto  ">
        <div className="bg-white p-6  flex flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-10.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              10
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Impact of Climate Change on Sundarbans People
            </h2>
            <p className="mb-4">
              The documentary highlights the issues residents of Sundarban have
              been facing due to climate change. We see the community people
              struggling with hypertension and other health issues due to
              extremely saline water. The documentary also highlights the
              efforts invested by the iKure team to help the Sundarban
              residents, come let us hear their stories.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed by:</span> Mouli Gayen
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Produced by:</span> Recanteur
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 6 mins 6 sec
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto ">
      <div className="bg-white p-6 flex-col-reverse  flex lg:flex-col md:flex-row  gap-6  border-b border-purple-400  border-dotted ">
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              11
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Economic Resilience
            </h2>
            <p className="mb-4">
              Pentakota, a coastal village in Puri, Odissa, is a microcosm of a
              community inextricably linked to the sea. Ten thousand families
              and migrants from Andhra Pradesh have made this fishing hamlet
              their home, their livelihoods entirely dependent on the ocean&apos;s
              bounty. Their lives are a daily gamble with the unforgiving sea.
              The looming threat of loss, whether it&apos;s a meagre catch or a loved
              one swallowed by the waves, casts a long shadow over their
              community. The film is a stark portrayal of their daily struggles
              and their unwavering hope for a future, thanks to Gopabandhu Seva
              Parishad.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Vrutti and Kamerkirriks
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> 5 minutes 14
                seconds
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-11.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto mb-7 ">
        <div className="bg-white p-6 lg:mb-4 flex flex-col md:flex-row  gap-6  rounded-md ">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 bg-yellow-100 rotate-3"></div>
              <div className="absolute inset-0 bg-white shadow-lg">
                <Image
                  src="/images/films/img-12.png"
                  alt="Cotton's Hidden Voices"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#F5D47A] text-white font-bold py-1 px-3 inline-block mb-4">
              12
            </div>
            <h2 className="text-[#7E3F98] text-2xl font-bold mb-4">
              Beyond the Clinic: The Invest4Wellness Model at Rehti
            </h2>
            <p className="mb-4">
            &apos;Beyond the Clinic&apos; is a documentary exploring the transformative
              impact of the Invest4Wellness model on women in Rehti. The film
              follows the inspiring journeys of women who have benefited from
              microfinance loans, self-help groups, and community health
              initiatives. Through intimate storytelling, the documentary
              unveils how these interconnected programs have empowered women to
              improve their health, financial stability, and overall well-being,
              ultimately creating a ripple effect of positive change within
              their community.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Directed and Produced by:</span>
                Swasti and Kamerakirriks
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span>15 minutes 34
                seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filmspage
