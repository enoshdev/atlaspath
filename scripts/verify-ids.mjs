import https from 'https';

const ids = [
  // Random old-format IDs to test (none of these are in the project)
  '1509023019892-344e4b1315cc',
  '1526379095098-d400fd0bf935',
  '1491971539053-24e0c8e0b7b9',
  '1521354513046-3f5f6a1b9e1c',
  '1504704957745-8f1b5f8b3c7d',
  '1517486435490-7b5f4e8a2f1b',
  '1504822019427-4f9b0b0c8e5d',
  '1527151153852-5e0f5b6f9a1c',
  '1497636572472-5f3f8a2b6c1d',
  '1524355442482-7c5f4e8a3b1d',
  '1507003078922-6a4b3c2d1e0f',
  '1504704957745-8f1b5f8b3c7d',
  '1517486435490-7b5f4e8a2f1b',
  '1527151153852-5e0f5b6f9a1c',
  '1497636572472-5f3f8a2b6c1d',
  '1524355442482-7c5f4e8a3b1d',
  '1507003078922-6a4b3c2d1e0f',
  '1519132234567-8a9b0c1d2e3f',
  '1521234567890-1a2b3c4d5e6f',
  '1490123456789-0a1b2c3d4e5f',
  '1501234567890-1a2b3c4d5e6f',
  '1512345678901-2a3b4c5d6e7f',
  '1523456789012-3a4b5c6d7e8f',
  '1534567890123-4a5b6c7d8e9f',
  '1545678901234-5a6b7c8d9e0f',
];

function checkId(id) {
  return new Promise((resolve) => {
    const url = `https://images.unsplash.com/photo-${id}?w=100`;
    const req = https.get(url, { method: 'HEAD' }, (res) => {
      resolve({ id, status: res.statusCode, ok: res.statusCode === 200 });
      res.resume();
    });
    req.on('error', (e) => resolve({ id, status: 'ERR', ok: false, error: e.message }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ id, status: 'TIMEOUT', ok: false }); });
  });
}

const results = await Promise.all(ids.map(checkId));
const working = results.filter(r => r.ok);
const failing = results.filter(r => !r.ok);

console.log('\n=== WORKING IDs ===');
working.forEach(r => console.log(r.id));

console.log('\n=== FAILING IDs ===');
failing.forEach(r => console.log(`${r.id} (${r.status})`));

console.log(`\nTotal: ${results.length} | Working: ${working.length} | Failing: ${failing.length}`);
