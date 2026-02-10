## NEURA SAMA COMMIT

package untuk membuat commit secara instan dengan bantuan groq ai, anda dapat membuat commit yang propesional.

### Fitur Utama

- dapat membuat commit secara otomatis di setiap file yang di commit, dengan template sebagai berikut:
  - feat:
  - fix:
  - chore:
  - refactor:
  - docs:
  - test:
- Bisa dry-run (tanpa commit)
- Support .env API Key
- CLI ringan dan cepat

---

### Cara Install

Global:

```bash
npm install -g nauracommit
```

Tanpa instal:

```bash
npx nauracommit
```

---

### setup Api Key

.env:

```env
GROQ_API_KEY=your_api_key_here
```

via CLI:

```bash
nauracommit --key YOUR_API_KEY
```
