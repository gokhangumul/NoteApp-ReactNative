export function Seo(url) {
          let title = url;
          title = title.trim();
          title = title.replace('ã¢', 'a');
          title = title.replace('ã‚', 'a');
          title = title.replace('ãª', 'e');
          title = title.replace('ãš', 'e');
          title = title.replace('ã§', 'c');
          title = title.replace('ã‡', 'c');
          title = title.replace('äÿ', 'g');
          title = title.replace('ä', 'g');
          title = title.replace('ä°', 'i');
          title = title.replace('ä±', 'i');
          title = title.replace('ã¶', 'o');
          title = title.replace('ã–', 'o');
          title = title.replace('åÿ', 's');
          title = title.replace('å', 's');
          title = title.replace('ã¼', 'u');
          title = title.replace('ãœ', 'u');
          title = title.replace('â', 'a');
          title = title.replace('Â', 'a');
          title = title.replace('ê', 'e');
          title = title.replace('Ê', 'e');
          title = title.replace('ç', 'c');
          title = title.replace('Ç', 'c');
          title = title.replace('ğ', 'g');
          title = title.replace('Ğ', 'g');
          title = title.replace('İ', 'i');
          title = title.replace('I', 'i');
          title = title.replace('ı', 'i');
          title = title.replace('î', 'i');
          title = title.replace('Î', 'i');
          title = title.replace('î', 'i');
          title = title.replace('ö', 'o');
          title = title.replace('Ö', 'o');
          title = title.replace('ş', 's');
          title = title.replace('Ş', 's');
          title = title.replace('ü', 'u');
          title = title.replace('Ü', 'u');
          title = title.replace(' ', '-');
          title = title.toLowerCase();
          while (title.indexOf('--') > -1) {
            title = title.replace('--', '-');
          }
        title = title.replace(/[^a-z0-9\-]/g, '');
        return title;
}
