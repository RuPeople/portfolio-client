import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, List, ListItem} from "@chakra-ui/react";
import BreadcrumbSeparator from "../static/BreadcrumbSeparator";
import {NavLink} from "react-router-dom";
import {PORTFOLIO_ROUTE} from "../utils/consts";
import My_Table from "../components/Table/My_Table";


const MyTablePage = () => {
    return (
        <AnimatePresence>
            <motion.section
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 10, opacity: 0}}
                className="work mx-auto px-4 px-sm-4 px-md-0" style={{maxWidth: 576}}>
                <Breadcrumb className="breadcrumbs" spacing='8px' separator={<BreadcrumbSeparator color='white'/>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="breadcrumbs__link" as={NavLink}
                                        to={PORTFOLIO_ROUTE}>Portfolio</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink className="breadcrumbs__link breadcrumbs__link_current"
                                        href='#'>Table</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <section>
                    <p className="work__description">Table</p>
                    <List className="work__list p-0">
                            <ListItem
                                className="work__list_item d-flex flex-column flex-sm-row justify-content-start align-items-start align-items-sm-center mb-2">
                                <Badge
                                    className="work__list_item-badge d-flex flex-row justify-content-center align-items-center py-1 px-2 me-2 ms-0"
                                    ml='1'>
                                    <svg className="bi bi-globe me-2" xmlns="http://www.w3.org/2000/svg" width="16"
                                         height="16" fill="currentColor"
                                         viewBox="0 0 16 16">
                                        <path xmlns="http://www.w3.org/2000/svg"
                                              d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                                        <path xmlns="http://www.w3.org/2000/svg"
                                              d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                                    </svg>
                                    Stack
                                </Badge>
                                <span className="work__list_item-text d-flex flex-row my-auto mt-1 mt-sm-0 mb-0">REACT, MOBX, Express, Axios</span>
                            </ListItem>
                    </List>
                    <My_Table/>
                </section>
            </motion.section>
        </AnimatePresence>
    );
};

export default MyTablePage;