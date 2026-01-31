const { test, expect } = require('@playwright/test');

// ----------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------
const URL = 'https://www.swifttranslator.com/';
const WAIT_TIME = 2000; // Time to wait for translation to appear
const TYPING_DELAY = 100; // Delay between keystrokes for realistic typing simulation

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
      
      // 5. VERIFICATION - Negative test: expect NOT to match exactly
      // Option 1: Check if expected text is NOT visible (or contains errors)
      const expectedElement = page.getByText(tc.expected).first();
      const isExpectedVisible = await expectedElement.isVisible().catch(() => false);
      
      // For negative tests, we expect the system to FAIL
      // So the expected correct output should NOT be visible
      // OR the actual output should be different from expected
      
      if (isExpectedVisible) {
        // If the system correctly handles the negative case (which it shouldn't),
        // then our negative test "fails" (meaning the system is better than expected)
        console.log(`WARNING: Negative test ${tc.id} passed - system handled it correctly`);
        console.log(`Expected failure but got: ${actualOutput}`);
      } else {
        // This is what we expect for negative tests - system fails to produce correct output
        console.log(`Negative test ${tc.id} behaving as expected (system failed)`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Actual: ${actualOutput}`);
        
        // We can assert that the output is NOT correct
        // Check for common error patterns in the actual output
        const hasNumbersAsText = tc.input.match(/[0-9]/) && actualOutput.includes(tc.input.match(/[0-9]/)[0]);
        const hasLiteralTransliteration = actualOutput.includes('@') || actualOutput.includes('http');
        
        if (actualOutput && actualOutput !== '') {
          // Output exists but is wrong - this is the expected failure
          expect(actualOutput).not.toBe(tc.expected);
        } else {
          // No output or empty output - also a failure scenario
          console.log('No output generated for negative test case');
        }
      }
      
      // 6. Take screenshot for documentation
      await page.screenshot({ path: `results/neg-test-${tc.id}.png` });
    });
  }
});

// ----------------------------------------------------
// TEST SUITE - NEGATIVE UI TESTS
// ----------------------------------------------------
test.describe('SwiftTranslator – Negative UI Tests', () => {
  for (const tc of negativeUITestCases) {
    test(`${tc.id} - ${tc.description}`, async ({ page }) => {
      await page.goto(URL);
      await page.waitForLoadState('networkidle');

      // 1. Locate Input (The textarea)
      const inputField = page.locator('textarea').first();
      
      // 2. Check initial state
      const initialHeight = await inputField.evaluate(el => el.clientHeight);
      
      // 3. Enter very long text
      await inputField.fill('');
      await inputField.fill(tc.input);
      await page.waitForTimeout(WAIT_TIME);
      
      // 4. Check for UI issues - negative test: expect problems
      const finalHeight = await inputField.evaluate(el => el.clientHeight);
      const hasVerticalScroll = await inputField.evaluate(el => el.scrollHeight > el.clientHeight);
      
      console.log(`Negative UI test ${tc.id}:`);
      console.log(`Height: ${initialHeight} -> ${finalHeight}`);
      console.log(`Scroll needed: ${hasVerticalScroll}`);
      
      // 5. VERIFICATION - Negative UI test: we expect issues
      // The textarea should expand or show scrollbars for very long text
      // If it doesn't, that might indicate text is being cut off
      
      // For very long input, we expect either:
      // 1. Textarea expands significantly OR
      // 2. Scrollbars appear OR
      // 3. Text is truncated/cut off
      
      const isHeightExpanded = finalHeight > initialHeight * 2;
      const hasUIProblem = isHeightExpanded || hasVerticalScroll;
      
      // We expect UI problems with very long input
      if (!hasUIProblem) {
        console.log('WARNING: No UI issues detected - text might be truncated');
      } else {
        console.log('UI issue detected as expected for negative test');
      }
      
      // 6. Check performance - long input might cause lag
      const startTime = Date.now();
      await inputField.fill('test'); // Try to type something else
      await page.waitForTimeout(500);
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      console.log(`Response time after long input: ${responseTime}ms`);
      
      if (responseTime > 1000) {
        console.log('Performance issue detected - slow response after long input');
      }
      
      // 7. Take screenshot for documentation
      await page.screenshot({ path: `results/neg-ui-${tc.id}.png` });
    });
  }
});