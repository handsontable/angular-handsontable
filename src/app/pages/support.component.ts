import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Support</h1>
      <h2>Help us improve</h2>
      <h2 id="report-bug">Report an issue</h2>
      <p>The sooner we know about the potential problem, the sooner we can take care of it. If you
        found a bug or a drawback, <a href="https://github.com/handsontable/angular-handsontable/issues/new" target="_blank"
        title="Add new issue to the angular-handsontable issue board.">create a new issue ${octicons['link-external'].toSVG()}</a>
        in the official repository on GitHub. Even better if you want to help us by fixing the
        issue yourself. In such case take a look at the guides for contributors (further below).</p>

      <h2 id="feature-request">Suggest an improvement</h2>
      <p>Any thoughts on how we can improve this wrapper are greatly appreciated.
      <a href="https://github.com/handsontable/angular-handsontable/issues/new?
        &title=${encodeURIComponent('Feature request:')}&body=${encodeURIComponent('<!-- description -->')}"
        target="_blank">Share your ideas on GitHub ${octicons['link-external'].toSVG()}</a>
        or contact us directly at support@hansontable.com. Thank you!.</p>

      <h2 id="contributors">Contribute</h2>
      <p>Your contributions to this project are very welcome. If you want to fix a bug or propose
        a new feature, you can open a new Pull Request, but first, make sure it follows these
        general rules:</p>
      <h3>Wrapper</h3>
      <ol>
        <li>Sign this <a href="https://goo.gl/forms/yuutGuN0RjsikVpM2" target="_blank">Contributor License Agreement
          ${octicons['link-external'].toSVG()}</a>
          to allow us to add your changes to the code.</li>
        <li>Make your changes on a separate branch. This will speed up the merging process.</li>
        <li>Always make the target of your pull request the <code>develop</code> branch, not
          <code>master</code>.</li>
        <li><strong>Important: For any change you make, please add at least one test case</strong>
          in proper <code>src/app/*.spec.ts</code> file. That will help us to better understand the issue and make sure
          that it stays fixed forever.</li>
        <li>Please review our <a href="https://github.com/airbnb/javascript" target="_blank">coding style
          ${octicons['link-external'].toSVG()}</a> for
          instructions on how to properly style the code.</li>
        <li>Add a thorough description of all the changes.</li>
      </ol>
      <h3>Documentation</h3>
      <ol>
        <li>Sign this <a href="https://goo.gl/forms/yuutGuN0RjsikVpM2" target="_blank">Contributor License Agreement
          ${octicons['link-external'].toSVG()}</a>
          to allow us to add your changes to the code.</li>
        <li>Make your changes on a separate branch. This will speed up the merging process.</li>
        <li>Always make the target of your pull request the <code>gh-pages-src</code> branch, not
          <code>gh-pages</code>.</li>
        <li>Please review our <a href="https://github.com/airbnb/javascript" target="_blank">coding style
          ${octicons['link-external'].toSVG()}</a> for
          instructions on how to properly style the code.</li>
        <li>Add a thorough description of all the changes.</li>
      </ol>
      <p>Thank you for your commitment!</p>
    </div>
  `
})
export class SupportComponent {}
