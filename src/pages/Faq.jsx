import Layout from "components/layout/Layout";
import { useState } from "react";
import { Accordion } from "react-bootstrap-accordion";

const Faq = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: "",
  })

  const handleToggle = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <>
          Ask <span>Question</span>
        </>
      }
    >
      <section className="faq-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-wrap">
                <div className="accordion" id="accordionExample">
                  <div className={isActive.key === 1 ? "accordion-item active" : "accordion-item"} 
                      onClick={() => handleToggle(1)}
                      >
                    <Accordion
                      title={"Can AI content writing replace human writers?"}
                      className={isActive.key === 1 ? "accordion-button" : "accordion-button collapsed"}
                    //   show={true}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  <div className={isActive.key === 2 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(2)}>
                    <Accordion
                      title={"How does AI content writing work?"}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  <div className={isActive.key == 3 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(3)}>
                    <Accordion
                      title={"What is AI content writing?"}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  <div className={isActive.key === 4 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(4)}>
                    <Accordion
                      title={"What are the benefits of using AI content writing?"}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  <div className={isActive.key === 5 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(5)}>
                    <Accordion
                      title={"Is AI content writing ethical?"}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  <div className={isActive.key === 6 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(6)}>
                    <Accordion
                      title={"How much does AI content writing cost?"}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  <div className={isActive.key === 7 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(7)}>
                    <Accordion
                      title={"How accurate is the content generated by AI software?"}
                    >
                      <p>
                        AI content writing works by using machine learning
                        algorithms to analyze vast amounts of data, including
                        text, images, and videos, to generate unique and
                        engaging content. The software learns from previous
                        content and can mimic the style and tone of human
                        writers.
                      </p>
                    </Accordion>
                  </div>
                  
                                     
                                      
                                        {/* <div className={isActive.key == 7 ? "accordion-item active" : "accordion-item"} onClick={() => handleToggle(7)}>
                                            <h2 className="accordion-header">
                                                <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    How accurate is the content generated by AI software?
                                                </button>
                                            </h2>
                                            <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                                </div>
                                            </div>
                                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faq;
