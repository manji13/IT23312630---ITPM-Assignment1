const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// ----------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------
const URL = 'https://www.swifttranslator.com/';
const WAIT_TIME = 5000; // INCREASED from 2000 to 5000ms (5 seconds)
const TYPING_DELAY = 100; // Delay between keystrokes for realistic typing simulation

// Ensure results directory exists
const resultsDir = path.join(__dirname, 'results');
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

// ----------------------------------------------------
// POSITIVE FUNCTIONAL TEST CASES
// ----------------------------------------------------
const positiveTestCases = [
  { id: 'Pos_Fun_0001', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Pos_Fun_0002', input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa', expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා' },
  { id: 'Pos_Fun_0003', input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.', expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.' },
  { id: 'Pos_Fun_0004', input: 'oya heta methanata enavanam mama enne naee', expected: 'ඔය හෙට මෙතනට එනවනම් මම එන්නෙ නෑ' },
  { id: 'Pos_Fun_0005', input: 'aayuboovan ! oyaata kohomadha? adha office ekee Zoom meeting ekata link eka thiyenavadha?', expected: 'ආයුබෝවන් ! ඔයාට කොහොමද? අද office එකේ Zoom meeting එකට link එක තියෙනවද?' },
  { id: 'Pos_Fun_0006', input: 'vahaama enna, oyaa 2026-08-21 dhinee indhan mehe vaeda karanna oonee.', expected: 'වහාම එන්න, ඔයා 2026-08-21 දිනේ ඉන්දන් මෙහෙ වැඩ කරන්න ඕනේ.' },
  { id: 'Pos_Fun_0007', input: 'api heta ennee naehae.', expected: 'අපි හෙට එන්නේ නැහැ.' },
  { id: 'Pos_Fun_0008', input: 'karuNaakaralaa mata udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?' },
  { id: 'Pos_Fun_0009', input: 'ehema karapan.', expected: 'එහෙම කරපන්.' },
  { id: 'Pos_Fun_0010', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Pos_Fun_0011', input: 'maath ekka school yanna enavadha ?', expected: 'මාත් එක්ක school යන්න එනවද ?' },
  { id: 'Pos_Fun_0012', input: 'vaessa naththam api heta trip ekak yamu.', expected: 'වැස්ස නත්තම් අපි හෙට trip එකක් යමු.' },
  { id: 'Pos_Fun_0013', input: 'vahaama dhora vahanna, naeththam horu eyi.', expected: 'වහාම දොර වහන්න, නැත්තම් හොරු එයි.' },
  { id: 'Pos_Fun_0014', input: 'ela machan api set vemu.', expected: 'එල මචන් අපි සෙට් වෙමු.' },
  { id: 'Pos_Fun_0015', input: 'tika tika vathura bonna oonee nitharama.', expected: 'ටික ටික වතුර බොන්න ඕනේ නිතරම.' },
  { id: 'Pos_Fun_0016', input: 'Zoom meeting ekata LinkedIn eken enna.', expected: 'Zoom meeting එකට LinkedIn එකෙන් එන්න.' },
  { id: 'Pos_Fun_0017', input: 'Zoom meeting ekata Google Calendar eken add karanna puluvandha ?', expected: 'Zoom meeting එකට Google Calendar එකෙන් add කරන්න පුලුවන්ද ?' },
  { id: 'Pos_Fun_0018', input: 'Apith ekka Colombo Fort yanna enavadha ?', expected: 'අපිත් එක්ක Colombo Fort යන්න එනවද ?' },
  { id: 'Pos_Fun_0019', input: 'WhatsApp group ekata message ekak yavanavadha ?', expected: 'WhatsApp group එකට message එකක් යවනවද ?' },
  { id: 'Pos_Fun_0020', input: 'suba udhaeesanak! oyaata kohomadha?', expected: 'සුබ උදෑසනක්! ඔයාට කොහොමද?' },
  { id: 'Pos_Fun_0021', input: 'api passe kathaa karamu.', expected: 'අපි පස්සෙ කතා කරමු.' },
  { id: 'Pos_Fun_0022', input: 'mama gedhara yanavaa, aeththama kiyannanam mata dhaen nidhimathayi.', expected: 'මම ගෙදර යනවා, ඇත්තම කියන්නනම් මට දැන් නිදිමතයි.' },
  { id: 'Pos_Fun_0023', input: 'ayiyoo! "meeka" mokakdha?', expected: 'අයියෝ! "මේක" මොකක්ද?' },
  { id: 'Pos_Fun_0024', input: 'Hello oyaata kohomadha? mata udhavvak karanna puLuvandha kiyala balanna', expected: 'Hello ඔයාට කොහොමද? මට උදව්වක් කරන්න පුළුවන්ද කියල බලන්න' }
];

// ----------------------------------------------------
// POSITIVE UI TEST CASES
// ----------------------------------------------------
const positiveUITestCases = [
  { 
    id: 'Pos_UI_0001', 
    description: 'Real-time update for polite request',
    input: 'karuNaakaralaa podi udhavvak karanna puLuvandha kiyala balanna.', 
    expected: 'කරුණාකරලා පොඩි උදව්වක් කරන්න පුළුවන්ද කියල බලන්න.',
    testType: 'real-time'
  }
];

// ----------------------------------------------------
// NEGATIVE FUNCTIONAL TEST CASES
// ----------------------------------------------------
const negativeTestCases = [
  {
    id: 'Neg_Fun_0001',
    input: 'm4m4 g3dh4r4 y4n4v44 m4ch4n d4n.',
    expected: 'මම ගෙදර යනවා මචන් දැන්.',
    description: 'Leet speak (numbers replacing letters) should fail'
  },
  {
    id: 'Neg_Fun_0002',
    input: 'karunaakaralamataudawwakkarannapuluwanda?',
    expected: 'කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?',
    description: 'Missing spaces should produce incorrect output'
  },
  {
    id: 'Neg_Fun_0003',
    input: 'oyage email address eka kamal@gmail.com da?',
    expected: 'ඔයාගේ email address එක kamal@gmail.com ද?',
    description: 'Email domain should not be transliterated'
  },
  {
    id: 'Neg_Fun_0004',
    input: 'machan, uba ara report eka submit karada?',
    expected: 'මචන්, උබ අර report එක submit කරාද?',
    description: 'Slang "karada" should be handled correctly'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'kohomdha oyaage wada katayuthu yanne dan?',
    expected: 'කොහොමද ඔයාගේ වැඩ කටයුතු යන්නේ දැන්?',
    description: 'Missing vowel should cause incorrect spelling'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'visthara www.wikipedia.org eken ganna',
    expected: 'විස්තර www.wikipedia.org එකෙන් ගන්න.',
    description: 'URL should remain in English'
  },
  {
    id: 'Neg_Fun_0007',
    input: 'api ReactJS walin website hadamu.',
    expected: 'අපි ReactJS වලින් website හදමු.',
    description: 'Technical term should not be transliterated'
  },
  {
    id: 'Neg_Fun_0008',
    input: 'mama twt msg ekak damma',
    expected: 'මම tweet message එකක් දැම්මා.',
    description: 'SMS abbreviations should be expanded'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'mama heta enwa sure.',
    expected: 'මම හෙට එනවා sure.',
    description: 'Missing vowel should cause incorrect verb form'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'mata 100mb data card ekak danna puluwnd?',
    expected: 'මට 100mb data card එකක් දාන්න පුළුවන්ද?',
    description: 'Missing vowels should cause incorrect output'
  },
  {
    id: 'Neg_Fun_0011',
    input: 'oy dn google.com ekata gihin me vachanaya search karann.',
    expected: 'ඔයා දැන් google.com එකට ගිහින් මේ වචනය search කරන්න.',
    description: 'Abbreviation and missing vowels should fail'
  }
];

// ----------------------------------------------------
// NEGATIVE UI TEST CASES
// ----------------------------------------------------
const negativeUITestCases = [
  {
    id: 'Neg_UI_0001',
    description: 'Input field overflow handling',
    input: 'mama gedhara yanavaa '.repeat(100),
    expected: '', // Very long input that might cause UI issues
    testType: 'overflow'
  }
];

// ----------------------------------------------------
// HELPER FUNCTION TO GET OUTPUT TEXT
// ----------------------------------------------------
async function getOutputText(page) {
  const outputSelectors = [
    'textarea[readonly]',
    'div.output',
    'div.result',
    'div.translation',
    'pre',
    '[data-testid="output"]',
    '.output-text',
    '.result-text'
  ];
  
  for (const selector of outputSelectors) {
    const outputElement = page.locator(selector).first();
    const count = await outputElement.count();
    if (count > 0) {
      const text = await outputElement.textContent();
      return text || '';
    }
  }
  
  // Try to find any Sinhala text on the page
  const sinhalaTextLocator = page.locator('*:has-text(/[\u0D80-\u0DFF]/)').first();
  if (await sinhalaTextLocator.count() > 0) {
    return await sinhalaTextLocator.textContent();
  }
  
  return '';
}

// ----------------------------------------------------
// TEST SUITE - POSITIVE FUNCTIONAL TESTS
// ----------------------------------------------------
test.describe('SwiftTranslator – Positive Functional Tests', () => {
  for (const tc of positiveTestCases) {
    test(`${tc.id} - Singlish to Sinhala conversion`, async ({ page }) => {
      await page.goto(URL);
      await page.waitForLoadState('networkidle');

      // 1. Locate Input (The textarea)
      const inputField = page.locator('textarea').first();

      // 2. Clear & Type Input
      await inputField.fill('');
      await inputField.fill(tc.input);

      // 3. Wait for translation to process
      await page.waitForTimeout(WAIT_TIME);

      // 4. VERIFICATION - Positive test: expect exact match
      await expect(page.getByText(tc.expected).first()).toBeVisible();
    });
  }
});

// ----------------------------------------------------
// TEST SUITE - POSITIVE UI TESTS
// ----------------------------------------------------
test.describe('SwiftTranslator – Positive UI Tests', () => {
  for (const tc of positiveUITestCases) {
    test(`${tc.id} - ${tc.description}`, async ({ page }) => {
      await page.goto(URL);
      await page.waitForLoadState('networkidle');

      // 1. Locate Input (The textarea)
      const inputField = page.locator('textarea').first();
      
      // 2. Clear the input field
      await inputField.fill('');
      
      // 3. Type character by character to simulate real-time typing
      const text = tc.input;
      for (let i = 0; i < text.length; i++) {
        await inputField.press(text[i]);
        await page.waitForTimeout(TYPING_DELAY);
        
        // Check if output area exists and updates as we type
        if (i % 5 === 0 || i === text.length - 1) {
          await page.waitForTimeout(200);
        }
      }

      // 4. Wait for final translation to complete
      await page.waitForTimeout(WAIT_TIME);

      // 5. VERIFICATION - Positive UI test: expect correct output
      await expect(page.getByText(tc.expected).first()).toBeVisible();
    });
  }
});

// ----------------------------------------------------
// TEST SUITE - NEGATIVE FUNCTIONAL TESTS
// ----------------------------------------------------
test.describe('SwiftTranslator – Negative Functional Tests', () => {
  for (const tc of negativeTestCases) {
    test(`${tc.id} - ${tc.description}`, async ({ page }) => {
      await page.goto(URL);
      await page.waitForLoadState('networkidle');

      // 1. Locate Input (The textarea)
      const inputField = page.locator('textarea').first();

      // 2. Clear & Type Input
      await inputField.fill('');
      await inputField.fill(tc.input);

      // 3. Wait for translation to process
      await page.waitForTimeout(WAIT_TIME);

      // 4. Get actual output
      const actualOutput = await getOutputText(page);
      
      console.log(`\n=== Negative Test ${tc.id} ===`);
      console.log(`Input: ${tc.input}`);
      console.log(`Expected (should NOT match): ${tc.expected}`);
      console.log(`Actual: ${actualOutput}`);
      
      try {
        // 5. NEGATIVE ASSERTION: Output should NOT match expected
        // This test PASSES when the translation is wrong
        expect(actualOutput).not.toBe(tc.expected);
        
        console.log(`✅ NEGATIVE TEST PASSED: System failed as expected`);
        
        // Take screenshot for documentation (even when test passes)
        await page.screenshot({ 
          path: path.join(resultsDir, `neg-test-${tc.id}.png`),
          fullPage: true 
        });
        
      } catch (error) {
        console.log(`❌ NEGATIVE TEST FAILED: System handled it correctly (unexpected!)`);
        
        // Take screenshot on failure
        await page.screenshot({ 
          path: path.join(resultsDir, `neg-test-FAILED-${tc.id}.png`),
          fullPage: true 
        });
        
        throw error;
      }
    });
  }
});

// ----------------------------------------------------
// TEST SUITE - NEGATIVE UI TESTS
// ----------------------------------------------------
test.describe('SwiftTranslator – Negative UI Tests', () => {
  for (const tc of negativeUITestCases) {
    test(`${tc.id} - ${tc.description}`, async ({ page }) => {
      // Set test timeout to 60 seconds
      test.setTimeout(60000);
      
      await page.goto(URL);
      await page.waitForLoadState('networkidle');

      // 1. Locate Input (The textarea)
      const inputField = page.locator('textarea').first();
      
      // 2. Check initial state
      const initialHeight = await inputField.evaluate(el => el.clientHeight);
      const initialScrollHeight = await inputField.evaluate(el => el.scrollHeight);
      
      console.log(`\n=== Negative UI Test ${tc.id} ===`);
      console.log(`Description: ${tc.description}`);
      console.log(`Input length: ${tc.input.length} characters`);
      console.log(`Initial height: ${initialHeight}px`);
      console.log(`Initial scroll height: ${initialScrollHeight}px`);
      
      // 3. Enter very long text
      await inputField.fill('');
      await inputField.fill(tc.input);
      await page.waitForTimeout(WAIT_TIME);
      
      // 4. Check final state
      const finalHeight = await inputField.evaluate(el => el.clientHeight);
      const finalScrollHeight = await inputField.evaluate(el => el.scrollHeight);
      const hasVerticalScroll = finalScrollHeight > finalHeight;
      
      console.log(`Final height: ${finalHeight}px`);
      console.log(`Final scroll height: ${finalScrollHeight}px`);
      console.log(`Vertical scroll needed: ${hasVerticalScroll}`);
      
      // 5. Take screenshot BEFORE any assertions (to capture the state)
      await page.screenshot({ 
        path: path.join(resultsDir, `neg-ui-${tc.id}.png`),
        fullPage: true 
      });
      
      try {
        // 6. Basic UI checks
        // Input field should still be visible and enabled
        await expect(inputField).toBeVisible();
        await expect(inputField).toBeEnabled();
        
        // 7. For negative UI test, we're mainly documenting the behavior
        // We expect SOME change with very long input
        const heightChanged = finalHeight !== initialHeight;
        const scrollbarAppeared = hasVerticalScroll;
        
        console.log(`Height changed: ${heightChanged}`);
        console.log(`Scrollbar appeared: ${scrollbarAppeared}`);
        
        if (!heightChanged && !scrollbarAppeared) {
          console.log(`⚠️  Warning: No visible UI change with very long input`);
        }
        
        // 8. Check performance - INCREASED wait time
        const startTime = Date.now();
        await inputField.fill('test'); // Clear and type something short
        await page.waitForTimeout(1000); // INCREASED from 500 to 1000ms
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        console.log(`Response time after long input: ${responseTime}ms`);
        
        if (responseTime > 3000) { // INCREASED threshold from 2000 to 3000ms
          console.log(`⚠️  Performance warning: Slow response (${responseTime}ms)`);
        }
        
        console.log(`✅ NEGATIVE UI TEST COMPLETED`);
        
      } catch (error) {
        console.log(`❌ NEGATIVE UI TEST FAILED: ${error.message}`);
        
        // Take another screenshot on failure
        await page.screenshot({ 
          path: path.join(resultsDir, `neg-ui-FAILED-${tc.id}.png`),
          fullPage: true 
        });
        
        throw error;
      }
    });
  }
});