---
title: Command line – Basics – kdb+ and q documentation
description: Command-line syntax for invoking q and list of the command-line options
author: Stephen Taylor
keywords: command, file, kdb+, line, option, q
---
# Command line




The command line for invoking kdb+ has the form:

```txt
q [file] [-b] [-c r c] [-C r c] [-e 0|1] [-E 0|1|2] [-g 0|1] [-l] [-L][-o N] 
    [-p port|servicename|host:port|host:servicename] 
    [-P N] [-q] [-r :H:P] [-s N] [-t N] [-T N] [-u 1] [-u|U F] [-w N] [-W N] 
    [-z 0|1]
```

<i class="far fa-hand-point-right"></i> 
[`.z.x`](../ref/dotz.md#zx-argv) (argv), 
[`.z.X`](../ref/dotz.md#zx-raw-command-line) (raw command line) 


```txt
Options:
 -b blocked                 -q quiet mode
 -c console size            -r replicate
 -C HTTP size               -s slaves
 -e error traps             -t timer ticks
 -E TLS Server Mode         -T timeout
 -g garbage collection      -u disable syscmds
 -l log updates             -u usr-pwd local
 -L log sync                -U usr-pwd
 -o UTC offset              -w memory
 -p listening port          -W start week
 -p multithread port        -z date format
 -P display precision        
```


## file
  
This is either the script to load (\*.q, \*.k, \*.s), or a file or a directory.

```bash
$q sp.q
KDB+ 3.5t 2017.02.28 Copyright (C) 1993-2017 Kx Systems
m32/ 4()core 8192MB sjt mint.local 192.168.0.39 NONEXPIRE
```

```q
+`p`city!(`p$`p1`p2`p3`p4`p5`p6`p1`p2;`london`london`london`london`london`lon..
(`s#+(,`color)!,`s#`blue`green`red)!+(,`qty)!,900 1000 1200
+`s`p`qty!(`s$`s1`s1`s1`s2`s3`s4;`p$`p1`p4`p6`p2`p2`p4;300 200 100 400 200 300)
q)
```


## `-b` (blocked)

Syntax: `-b`
  
Block client write-access to a kdb+ database. 

```bash
~/q$ q -b
```

```q
q)aa:([]bb:til 4)
q)\p 5001
q)
```

and in another task

```q
q)h:hopen 5001
q)h"count aa"
4
q)h"aa:10#aa"
'noupdate
q)
```

Use `\_` to check if client write-access is blocked:

```q
~/q$ q -b
..
q)\_
1
```



## `-c` (console size)

Syntax: `-c r c`
  
Set console maximum rows and columns, default 25 80.

<i class="far fa-hand-point-right"></i> 
[`\c` system command](syscmds.md#c-console-size) for detail  


## `-C` (HTTP size)

Syntax: `-C r c`
  
Set HTTP display maximum rows and columns. 

<i class="far fa-hand-point-right"></i> 
[`\C` system command](syscmds.md#c-http-size) for detail 



## `-e` (error traps)

Syntax: `-e [0|1|2]`

Sets error-trapping mode.
The default is 0 (off). 

<i class="far fa-hand-point-right"></i>
[`\e` system command](syscmds.md#e-error-trap-clients) for detail



## `-E` (TLS Server Mode)

Syntax: `-E x` (since V3.4)

x   | mode
--- | ----
0   | plain
1   | plain & TLS
2   | TLS only

<i class="far fa-hand-point-right"></i> 
Knowledge Base: [SSL/TLS](../kb/ssl.md#tls-server-mode)


## `-g` (garbage collection)

Syntax: `-g [0|1]`
  
Sets garbage-collection mode: 

-   0 for deferred (default)
-   1 for immediate

<i class="far fa-hand-point-right"></i>
[`\g` system command](syscmds.md#g-garbage-collection-mode) for detail



## `-l` (log updates)

Syntax: `-l`
  
Log updates to filesystem  
<i class="far fa-hand-point-right"></i> 
Knowledge Base: [Logging](../kb/logging.md)


## `-L` (log sync)

Syntax: `-L`
  
As `-l`, but sync logging  
<i class="far fa-hand-point-right"></i> 
Knowledge Base: [Logging](../kb/logging.md)


## `-o` (UTC offset)

Syntax: `-o N`
  
Sets local time offset as `N` hours from UTC, or minutes if `abs[N]>23` 
(Affects [`.z.Z`](../ref/dotz.md#zz-local-datetime))

<i class="far fa-hand-point-right"></i>
[`\o` system command](syscmds.md#o-offset-from-utc) for detail


## `-p` (listening port)

Syntax: `-p [hostname:][portnumber|servicename]`

Kdb+ will listen to `portnumber` or the port number of `servicename` on all interfaces, or on `hostname` only if specified. 
The port must be available and the process must have permission for the port.

The default is 0 (no listening port). 

<i class="far fa-hand-point-right"></i>
[`\p` system command](syscmds.md#p-listening-port) for detail



## `-P` (display precision)

Syntax: `-P N`
  
Display precision for floating-point numbers, i.e. the number of digits shown. 

<i class="far fa-hand-point-right"></i>
[`\P` system command](syscmds.md#p-precision) for detail


## `-q` (quiet mode)

Syntax: `-q`
  
Quiet, i.e. no startup banner text or session prompts. Typically used where no console is required.

```bash
~/q$ q
KDB+ 3.5t 2017.02.28 Copyright (C) 1993-2017 Kx Systems
…
```

```q
q)2+2
4
q)
```

and with `-q`

```bash
~/q$ q -q
```

```q
2+2
4
```

<i class="far fa-hand-point-right"></i>
[`.z.q`](../ref/dotz.md#zq-quiet-mode) (quiet mode) 


## `-r` (replicate)
  
Syntax: `-r :host:port[:user[:password]]`
  
Replicate from `:host:port`.

<i class="far fa-hand-point-right"></i>
[`\r` system command](syscmds.md#r-replication-master) 


## `-s` (slaves)
  
Syntax: `-s N`
  
Number of slave threads or processes available for parallel processing.

<i class="far fa-hand-point-right"></i>
[`\s` system command](syscmds.md#s-number-of-slaves) for detail



## `-t` (timer ticks)

Syntax: `-t N`
  
Period in milliseconds between timer ticks. Default is 0, for no timer.

<i class="far fa-hand-point-right"></i>
[`\t` system command](syscmds.md#t-timer) for detail


## `-T` (timeout)

Syntax: `-T N`
  
Timeout in seconds for client queries, i.e. maximum time a client call will execute. Default is 0, for no timeout.

<i class="far fa-hand-point-right"></i>
[`\T` system command](syscmds.md#t-timeout) for detail


## `-u` (disable syscmds)

Syntax: `-u 1`
  
Disables system commands from a remote (signals `'access`). As such, this includes disabling exit via `"\\"` from a remote.

!!! warning "Weak protection"

This option offers only a simple protection against “wrong” queries.

For example, setting a system command in `.z.ts` and starting the timer still works. The right system command could for example expose a terminal, so the user running the database could be fully impersonated and compromised from then on.


## `-u` (usr-pwd local)

Syntax: `-u file`
  
Sets a password file; no access above start directory

The password file is a text file with one credential on each line. 
(No trailing blank line/s.)

```txt
user1:password1
user2:password2
```

The password can be plain text, or an MD5 hash of the password.

```q
q)raze string md5 "this is my password"
"210d53992dff432ec1b1a9698af9da16"
```


## `-U` (usr-pwd)

Syntax: `-U file`
  
As `-u`, but without access restrictions.


## `-w` (memory)

Syntax: `-w N`
  
Workspace limit in MB for the heap per thread. Default is 0: no limit. 

<i class="far fa-hand-point-right"></i>
[`\w` system command](syscmds.md#w-workspace) for detail  
Reference: [`.Q.w`](../ref/dotq.md#qw-memory-stats)


!!! tip "Other ways to limit resources"

    On Linux systems, administrators might prefer [cgroups](https://en.wikipedia.org/wiki/Cgroups) as a way of limiting resources.

    On Unix systems, memory usage can be constrained using `ulimit`, e.g. <pre><code class="language-bash"> $ ulimit -v 262144 </code></pre>limits virtual address space to 256MB.


## `-W` (start week)

Syntax: `-W N`
  
Set the start-of-week offset, where 0 is Saturday. The default is 2, i.e Monday.

<i class="far fa-hand-point-right"></i>
[`\W` system command](syscmds.md#w-week-offset) for detail


## `-z` (date format)

Syntax: `-z [0|1]`
  
Set the format for `"D"$` date parsing: 0 for mm/dd/yyyy and 1 for dd/mm/yyyy.

<i class="far fa-hand-point-right"></i>
[`\z` system command](syscmds.md#z-date-parsing)


[![](../img/xkcd.tar.png)](https://xkcd.com/1168/)  
_xkcd.com_
