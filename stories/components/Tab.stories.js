import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import { formatCode } from "../lib/utils";
import SyntaxHighlighter from "../lib/SyntaxHighlighter";
import { Tab } from "../../src/components";
import { Page, Title } from "../shared-styles";

const code1 = `
import { Tab } from 'sgds-govtech-react' 

<Tab tabItems={tabItems} />

`;


const tabItems = [
  {
    title:'Tab 1',
    icon:'sgds-icon-boat',
    content:(  
      <div class="col">
        <h5>Tab 1 Content</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos fugiat in
          incidunt mollitia quam qui totam vel veritatis vero.
        </p>
      </div>
    )
  },
  {
    title:'Tab 2',
    icon:'sgds-icon-bus',
    content:(  
      <div class="col">
        <h5>Tab 2 Content</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos fugiat in
          incidunt mollitia quam qui totam vel veritatis vero.
        </p>
      </div>
    )
  },
  {
    title:'Tab 3',
    icon:'sgds-icon-train',
    content:(  
      <div class="col">
        <h5>Tab 3 Content</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos fugiat in
          incidunt mollitia quam qui totam vel veritatis vero.
        </p>
      </div>
    )
  }
]

const TabStories = props => {
  return (
    <Page>
      <Title className="sgds-section">
        <h3 className="has-text-white has-text-weight-semibold">Tab</h3>
      </Title>
      <section className="sgds-section">
        <h4 className="has-text-primary">
        Tabs are navigation elements that let users easily access different areas of a site or different parts of an individual page. Think tabbed dividers in a filing cabinet – by clicking a tab, users can easily locate a page containing related content
        </h4>

        <hr className="margin--bottom--lg margin--top--lg"></hr>

        <h5 className="has-text-primary has-text-weight-semibold margin--bottom">
          Default Tab
        </h5>
        <div className="row is-multiline">
          <div className="col">
            <Tab tabItems={tabItems} />
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <SyntaxHighlighter>{code1}</SyntaxHighlighter>
          </div>
        </div>
        <hr className="margin--bottom--lg margin--top--lg"></hr>
      </section>
    </Page>
  );
};

export default TabStories;
