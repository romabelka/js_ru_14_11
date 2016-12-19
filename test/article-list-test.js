import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import ArticleList from '../src/components/ArticleList/Dumb'
import { normalizedComments } from '../src/fixtures'

describe("A suite", function() {
    it("load all articles triggered on mount", function(done) {
        function loadAllArticles() {
            done()
        }

        mount(<ArticleList articles={[]} loadAllArticles = {loadAllArticles} />)
    })
});