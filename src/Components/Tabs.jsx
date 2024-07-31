import React from "react";
import { tabs } from "../tabsData.js";
import { motion } from "framer-motion";

const Tabs = (props) => {
  return (
    <>
      <div className="border-mountain-blue-300 absolute bottom-72 left-1/2 flex -translate-x-1/2 gap-4 rounded-lg border p-1">
        {tabs.map((tab, index) => (
          <button
            className="relative cursor-pointer rounded-lg p-2 text-white"
            onClick={() => {
              props.setActiveTab(index + 1);
            }}
          >
            <span
              className={`${
                props.activeTab === index + 1
                  ? "relative z-10 transition-colors"
                  : "relative z-10 text-gray-400 transition-colors"
              }`}
            >
              {tab.title}
            </span>
            {props.activeTab === index + 1 && (
              <motion.div
                className={`${
                  props.activeTab === index + 1
                    ? "bg-mountain-blue-700 absolute inset-0 rounded-md"
                    : ""
                }`}
                key={tab.id}
                layoutId="tab-highlight"
              ></motion.div>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
