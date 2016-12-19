import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import Comment from '../src/components/Comment'
import { normalizedComments } from '../src/fixtures'

describe("A suite", function() {
    it("contains body", function() {
        expect(mount(<Comment comment={normalizedComments[0]} />).find('.test-comment-body').length).to.equal(1)
    })
});