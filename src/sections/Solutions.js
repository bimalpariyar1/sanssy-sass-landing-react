import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IconBox from "components/IconBox";
import SectionHeading from "components/SectionHeading";

const solutionsData = [
    {
        id: 1,
        icon: "las la-user-check",
        title: "Custom Edit Tools",
        desc: "Class aptent taciti socis torq conub nostram justo.",
    },
    {
        id: 2,
        icon: "las la-pen-nib",
        title: "Easy To Customize",
        desc: "Fusce egestas scelerisque augue eu sagittis nam.",
    },
    {
        id: 3,
        icon: "las la-comment",
        title: "Built In Safety Chat",
        desc: "Vestibulum viverra nuncut sagittis hendrerit iaculis.",
    },
    {
        id: 4,
        icon: "lab la-bandcamp",
        title: "Relevant Platform",
        desc: "Morbi nec fermentum lorem vitae lacinia felis integer.",
    },
    {
        id: 5,
        icon: "lar la-hdd",
        title: "Foster Trust Builds",
        desc: "Pellentesque laoreet purus ut euismod suspendis.",
    },
    {
        id: 6,
        icon: "las la-border-all",
        title: "Create Auto Layout",
        desc: "Proin at orci quam. Dosnec lorem magn porta mole.",
    },
];

const Solutions = () => {
    return (
        <section className="sp-t">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mb-5">
                            <SectionHeading
                                title="Unlocking the Potential of the Top Notch Solutions with us Today!"
                                desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                            />
                        </div>
                        {/* Section Heading */}
                    </Col>
                </Row>

                <Row>
                    {/* Solutions Lists */}
                    {(solutionsData || []).map((item) => (
                        <Col lg={4} key={item.id} className="mb-4">
                            <div className="solutions-boxes p-4">
                                <IconBox headingVariant="h5" icon={item.icon} title={item.title} desc={item.desc} />
                            </div>
                        </Col>
                    ))}
                    {/* Solutions Lists */}
                </Row>
            </Container>
        </section>
    );
};

export default Solutions;
