import {
  faArrowLeft,
  faArrowRight,
  faCartPlus,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import config from "../config";

const variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.2,
    },
  },
};
const Card = ({
  image,
  name,
  category,
  navigate,
  id,
  admin,
  price,
  handleEdit,
  handleDelete,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="card">
        <div className="container">
          <div className="image">
            <img src={`${image}`} alt={name} />
          </div>
          <div className="caption">
            <div className="card_category">{category}</div>
            <div className="card_title">{name}</div>
          </div>
          <div className="actions">
            {admin ? (
              <>
                {" "}
                {price}
                <button>
                  <FontAwesomeIcon
                    onClick={() => handleDelete(id)}
                    icon={faTrash}
                  />
                </button>
                <button onClick={() => handleEdit(id)}>
                  <FontAwesomeIcon icon={faPencil} />
                </button>
              </>
            ) : (
              <>
                {" "}
                {price}
                <button>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
                <button
                  onClick={() => {
                    navigate(`/product/${id}`);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
