import test from 'node:test';
import assert from 'node:assert/strict';
import {assertPreservesSvgArtwork} from './public-icon-exporter.js';
const dot='<svg><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>';
const artwork='<svg><path d="M2 2 L20 20"/></svg>';
test('placeholder sync cannot overwrite edited vector artwork',()=>{
  assert.throws(()=>assertPreservesSvgArtwork(dot,artwork,'clothing.svg'),/Promote the artwork/);
  assert.doesNotThrow(()=>assertPreservesSvgArtwork(artwork,dot,'clothing.svg'));
  assert.doesNotThrow(()=>assertPreservesSvgArtwork(artwork,artwork,'clothing.svg'));
  assert.doesNotThrow(()=>assertPreservesSvgArtwork(dot,dot,'pending.svg'));
});
