function hanoi(disks, from, to, extra) {
  if (disks === 1) {
    console.log(`Move disk 1 from post ${from} to post ${to}`);
  } else {
    hanoi(disks - 1, from, extra, to);
    console.log(`Move disk ${disks} from post ${from} to post ${to}`);
    hanoi(disks - 1, extra, to, from);
  }
}

const args = process.argv.slice(2);

hanoi(...args);
