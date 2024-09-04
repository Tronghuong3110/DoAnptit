package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data

public class Match {
    private Long id;
    private Integer pointTem1;
    private Integer pointTeam2;
    private LocalDateTime createAt;

}
