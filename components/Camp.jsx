import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from 'react';

const CampSite = function({ backgroundImage, title, subtitle, peopleJoined }) {
  return (
    React.createElement('div', { className: `h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl` },
      React.createElement('div', { className: "flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10" },
        React.createElement('div', { className: "flexCenter gap-4" },
          React.createElement('div', { className: "rounded-full bg-green-50 p-4" },
            React.createElement(Image, { src: "/folded-map.svg", alt: "map", width: 28, height: 28 })
          ),
          React.createElement('div', { className: "flex flex-col gap-1" },
            React.createElement('h4', { className: "bold-18 text-white" }, title),
            React.createElement('p', { className: "regular-14 text-white" }, subtitle)
          )
        ),

        React.createElement('div', { className: "flexCenter gap-6" },
          React.createElement('span', { className: "flex -space-x-4 overflow-hidden" },
            PEOPLE_URL.map((url) => 
              React.createElement(Image, { 
                className: "inline-block h-10 w-10 rounded-full",
                src: url,
                key: url,
                alt: "person",
                width: 52,
                height: 52
              })
            )
          ),
          React.createElement('p', { className: "bold-16 md:bold-20 text-white" }, peopleJoined)
        )
      )
    )
  );
};

const Camp = function() {
  return (
    React.createElement('section', { className: "2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20" },
      React.createElement('div', { className: "hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]" },
        React.createElement(CampSite, {
          backgroundImage: "bg-bg-img-1",
          title: "Putuk Truno Camp",
          subtitle: "Prigen, Pasuruan",
          peopleJoined: "50+ Joined"
        }),
        React.createElement(CampSite, {
          backgroundImage: "bg-bg-img-2",
          title: "Mountain View Camp",
          subtitle: "Somewhere in the Wilderness",
          peopleJoined: "50+ Joined"
        })
      ),
      React.createElement('div', { className: "flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6" },
        React.createElement('div', { className: "bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl" },
          React.createElement('h2', { className: "regular-24 md:regular-32 2xl:regular-64 capitalize text-white" },
            React.createElement('strong', null, "Feeling Lost"), " And Not Knowing The Way?"
          ),
          React.createElement('p', { className: "regular-14 xl:regular-16 mt-5 text-white" },
            "Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure"
          ),
          React.createElement(Image, {
            src: "/quote.svg",
            alt: "camp-2",
            width: 186,
            height: 219,
            className: "camp-quote"
          })
        )
      )
    )
  );
};

module.exports = Camp;
