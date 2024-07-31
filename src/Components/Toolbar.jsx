import React from "react";
import { toolbars } from "../toolbarData";
import { motion } from "framer-motion";

const Toolbar = (props) => {
  const toolbarWidths = [315, 352, 424];

  const selectedToolbarWidth = toolbarWidths[props.activeTab - 1] || "auto";

  return (
    <>
      <motion.div
        className="bg-mountain-blue-900 absolute bottom-96 left-1/2 flex -translate-x-1/2 flex-col overflow-hidden rounded-xl p-2"
        animate={{ width: selectedToolbarWidth }}
        transition={{ type: "spring", stiffness: 802, damping: 44 }}
      >
        <div className="flex flex-col gap-8">
          {toolbars.map((toolbar, index) =>
            props.activeTab === index + 1 ? (
              <div
                className={`${
                  props.activeTab === index + 1
                    ? "flex items-center gap-6 pl-2"
                    : ""
                }`}
                key={toolbar.id}
                layoutId="toolbar"
                animate={{ width: "auto" }}
              >
                <motion.div
                  className="overflow-hidden"
                  layout="preserve-aspect"
                  layoutId="toolbar-text"
                  transition={{ type: "tween", duration: 0.1 }}
                >
                  <span className="whitespace-nowrap">{toolbar.text}</span>
                </motion.div>
                <motion.button
                  className={toolbar.btnClass}
                  layout="preserve-aspect"
                  layoutId="toolbar-button"
                  transition={{ type: "spring", stiffness: 802, damping: 44 }}
                >
                  <span className={toolbar.btnTextClass}>
                    {toolbar.btnText}
                  </span>
                </motion.button>
              </div>
            ) : null,
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Toolbar;
