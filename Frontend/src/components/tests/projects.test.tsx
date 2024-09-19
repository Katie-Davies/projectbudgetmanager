//@vitest-environment jsdom
import { renderApp } from '../../Test/setup'
import { describe, it, expect } from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import nock from 'nock'
