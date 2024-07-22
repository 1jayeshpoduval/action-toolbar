import React from "react";
import { tabs } from "../tabsData.js";
import { motion } from "framer-motion";

const Tabs = (props) => {
  return (
    <>
      <div className="u-display-flex u-position-absolute u-left-1/2 u-bottom-20 u-translateX-1/2 u-p-0.25 u-gap-1 u-border-radius-0.5 u-border-mtn-blue-300 ">
        {tabs.map((tab, index) => (
          <button
            className="btn u-position-relative u-text-white u-cursor-pointer"
            onClick={() => {
              props.setActiveTab(index + 1);
            }}
          >
            <span
              className={`${
                props.activeTab === index + 1
                  ? "u-position-relative u-z-index-2 u-transition-color-0.2"
                  : "u-position-relative u-z-index-2 u-text-grey-500 u-transition-color-0.2"
              }`}
            >
              {tab.title}
            </span>
            {props.activeTab === index + 1 && (
              <motion.div
                className={`${
                  props.activeTab === index + 1
                    ? "u-position-absolute u-w-full u-h-full u-bg-mtn-blue-700 u-border-radius-0.4"
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
