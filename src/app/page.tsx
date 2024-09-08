export const dynamic = "force-dynamic";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default async function Home() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8 gap-8">
      <div className="max-w-[800px] w-full px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-4xl tracking-tighter py-4">
          ELITE PERFORMANCE COACHING
        </h1>
        <Image
          src="/ranger_blur.png"
          alt="Ranger"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg"
        />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Am I a Good Fit?</h2>
          <p>
            Our coaching is ideal for ambitious professionals, miilitary, and
            athletes who:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Are committed to achieving exceptional results</li>
            <li>Seek personalized guidance and accountability</li>
            <li>Are struggling to make progress past a certain point</li>
            <li>Are preparing for a race, military school, or competition</li>
            <li>Want to optimize your performance in work and life</li>
          </ul>
        </section>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://cal.com/acidgambit/30min"
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Schedule a Consulation
          </Link>
        </div>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p>
            With over 2 decades of combined training and coaching experience in
            high-performance environments, our coaches bring a unique blend of
            technical expertise, miltary experience, and leadership skills. Our
            background includes:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              2 Coaches: Engineer Officer at the Pentagon and an SF Operator
            </li>
            <li>Military leadership experience (both officer and NCO)</li>
            <li>Expertise in performance optimization and data analytics</li>
            <li>
              Previous world record holder for most Murphs completed in 24hrs
            </li>
            <li>
              Numerous ultramarathon finishes (100k, 50 miles, 100 miles, and
              100+ milers)
            </li>
            <li>
              Sub-5 minute 1 mile time, sub 2 hour 12-mile ruck times, and 600
              ACFTs{" "}
            </li>
            <li>Graduates of Ranger School and SFQC</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="font-semibold">Mark, 46, Goldman Sachs VP</h3>
              <p>
                Improved overall mobility, speed, and strength given extreme
                work and travel requirements
              </p>
            </div>

            <div className="bg-zinc-800 rounded-lg p-4">
              <h3 className="font-semibold">Chad, 26, Army Infantry Officer</h3>
              <p>
                After a 21-day nonselect at SFAS, trained with AG and was
                selected for SFQC.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Clients We&apos;ve Worked With
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Naval officers, SEALs, Army Infantry, Army Rangers, Air Force
              Special Operators, MARSOC, and SF Operators
            </li>
            <li>
              Civilians in high performance careers including airliner pilots,
              tech bros, finance bros
            </li>
            <li>Law Enforcement Officers, First Responders (EMS, Fire)</li>
          </ul>
        </section>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://cal.com/acidgambit/30min"
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Schedule a Consulation
          </Link>
        </div>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What Does Coaching Look Like?
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Training in 4 week blocks, with a mid-long term focus 3-12 months
              out
            </li>
            <li>
              Monthly check-ins to review progress, address challenges, and
              adjust goals as needed
            </li>
            <li>
              Ongoing support and accountability to ensure sustained progress
              via group chat, video calls, and email
            </li>
            <li>
              Nutrition and recovery guidance as needed to optimize performance
              and prevent injury
            </li>
            <li>Mobility and recovery guidance</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What are Clients Saying?
          </h2>
          <p className="pb-6 pt-2">
            Frankly the responses we get from you are incredibly rewarding. See
            below:
          </p>
          <blockquote className="italic bg-zinc-800 p-4 rounded-lg mb-4">
            The personal connection alone should make it $500 per month
            <footer className="text-right mt-2">- Matt</footer>
          </blockquote>
          <blockquote className="italic bg-zinc-800 p-4 rounded-lg mb-4">
            I&apos;m getting AG tatted on my ass.
            <footer className="text-right mt-2">- Richard</footer>
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/kalaf.jpg"
              alt="Client Result 1"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result2.jpg"
              alt="Client Result 2"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result3.jpg"
              alt="Client Result 3"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result4.jpg"
              alt="Client Result 4"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result5.jpg"
              alt="Client Result 5"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result6.jpg"
              alt="Client Result 6"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result7.jpg"
              alt="Client Result 6"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/result8.jpg"
              alt="Client Result 6"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-zinc-800 p-4">
              <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
              <p className="font-mono mt-2">$399/month</p>
              <ul className="list-disc pl-6 mt-2">
                <li>4 week training blocks</li>
                <li>Monthly google meet check-ins</li>
                <li>Personalized training dashboard + app</li>
                <li>Access to AG&apos;s private Mobility program</li>
                <li>Nutrition buildout as needed</li>
                <li>Unlimited Q+A with your coaches</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://cal.com/acidgambit/30min"
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Schedule a Consultation (completely free)
          </Link>
        </div>
      </div>
    </main>
  );
}
